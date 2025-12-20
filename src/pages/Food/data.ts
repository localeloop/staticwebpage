export type FoodMenuCard = {
    key: string;              // e.g. "qh-main-menu"
    label: string;            // e.g. "Main Menu"
    pdfUrl?: string;
    image: {
        src: string;
        alt: string;
        srcSet?: string;
        sizes?: string;
    } | null;
};

export type FoodPageData = {
    title: string;
    body: string;
    flip: string;
    carouselImages: string[]; // urls
    cards: FoodMenuCard[];
};

type StrapiFormat = { url: string; width?: number };
type StrapiUpload = {
    id: number;
    name: string;
    mime: string;
    url: string;
    alternativeText?: string | null;
    formats?: {
        thumbnail?: StrapiFormat;
        small?: StrapiFormat;
        medium?: StrapiFormat;
        large?: StrapiFormat;
    } | null;
};

type FoodEntry = {
    id: number;
    Title?: string | null;
    Body?: string | null;
    Flip?: string | null;
    CarouselImages?: StrapiUpload[] | null;
    PDFUploads?: StrapiUpload[] | null;
};

type FoodResponse = { data: FoodEntry[] };

const pickFirst = <T,>(arr?: T[] | null) => (arr && arr.length ? arr[0] : null);

const isPdf = (u: StrapiUpload) => u.mime === "application/pdf" || u.name.toLowerCase().endsWith(".pdf");
const isImage = (u: StrapiUpload) => u.mime?.startsWith("image/") || /\.(png|jpe?g|webp)$/i.test(u.name);

const stripExt = (filename: string) => filename.replace(/\.[^.]+$/, "");
const normalizeBase = (filenameNoExt: string) => filenameNoExt.replace(/-\d+$/, ""); // qh-main-menu-2 -> qh-main-menu

function buildSrcSet(formats?: StrapiUpload["formats"] | null) {
    if (!formats) return undefined;
    const candidates: Array<{ url: string; w: number }> = [];
    if (formats.thumbnail?.url) candidates.push({ url: formats.thumbnail.url, w: formats.thumbnail.width ?? 110 });
    if (formats.small?.url) candidates.push({ url: formats.small.url, w: formats.small.width ?? 354 });
    if (formats.medium?.url) candidates.push({ url: formats.medium.url, w: formats.medium.width ?? 531 });
    if (formats.large?.url) candidates.push({ url: formats.large.url, w: formats.large.width ?? 708 });
    if (!candidates.length) return undefined;
    return candidates.map(c => `${c.url} ${c.w}w`).join(", ");
}

export async function fetchFoodPageData(): Promise<FoodPageData> {
    const baseUrl = process.env.REACT_APP_API_URL; // e.g. https://api.thequeensheadfarnham.co.uk/api/
    const token = process.env.REACT_APP_BEARER_TOKEN;

    if (!baseUrl) throw new Error("Missing REACT_APP_API_URL");

    const url = `${baseUrl}food-menu-pdf-uploads?populate=*&sort=publishedAt:desc`;

    const res = await fetch(url, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Strapi request failed: ${res.status} ${text}`);
    }

    const json = (await res.json()) as FoodResponse;
    const entry = pickFirst(json.data);

    const title = (entry?.Title ?? "Food").trim();
    const body = (entry?.Body ?? "").trim();
    const flip = (entry?.Flip ?? "").trim();

    // carousel images (if you start using CarouselImages)
    const carouselImages =
        (entry?.CarouselImages ?? [])
            .filter(isImage)
            .map(x => x.url);

    const uploads = entry?.PDFUploads ?? [];

    // Index PDFs by base name (qh-main-menu, kids-menu, etc.)
    const pdfByBase = new Map<string, string>();
    for (const u of uploads.filter(isPdf)) {
        const base = normalizeBase(stripExt(u.name.toLowerCase()));
        pdfByBase.set(base, u.url);
    }

    // Collect image previews by base, allowing multiple images per base (e.g. -1, -2)
    const imagesByBase = new Map<string, StrapiUpload[]>();
    for (const u of uploads.filter(isImage)) {
        const base = normalizeBase(stripExt(u.name.toLowerCase()));
        const list = imagesByBase.get(base) ?? [];
        list.push(u);
        imagesByBase.set(base, list);
    }

    // Define the UI cards you want, and map them to file bases
    // Adjust keys if your naming changes.
    const cardDefs: Array<{ key: string; label: string; alt: string }> = [
        { key: "qh-main-menu", label: "Main Menu", alt: "main menu the queens head farnham" },
        { key: "qh-main-menu", label: "Burgers", alt: "burgers menu the queens head farnham" }, // uses -2 image if present
        { key: "breakfast-menu", label: "Breakfast", alt: "breakfast menu the queens head farnham" },
        { key: "kids-menu", label: "Kids Menu", alt: "kids menu the queens head farnham" },
    ];

    const sizes = "(max-width: 600px) 95vw, (max-width: 1024px) 45vw, 40vw";

    const cards: FoodMenuCard[] = cardDefs.map((def, idx) => {
        const pdfUrl = pdfByBase.get(def.key);

        const imgs = imagesByBase.get(def.key) ?? [];
        // For qh-main-menu we want two distinct images if available: -1 and -2.
        // We'll pick by index (0 for "Main Menu", 1 for "Burgers") as a reasonable rule.
        const chosen = def.key === "qh-main-menu" ? (imgs[idx] ?? imgs[0]) : imgs[0];

        const image = chosen
            ? {
                src: chosen.url,
                alt: chosen.alternativeText ?? def.alt,
                srcSet: buildSrcSet(chosen.formats),
                sizes,
            }
            : null;

        return { key: def.key, label: def.label, pdfUrl, image };
    });

    return { title, body, flip, carouselImages, cards };
}
