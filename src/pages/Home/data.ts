// src/pages/Home/data.ts

type StrapiFormat = { url: string; width?: number };
type StrapiMedia = {
    url: string;
    alternativeText?: string | null;
    name?: string | null;
    formats?: {
        thumbnail?: StrapiFormat;
        small?: StrapiFormat;
        medium?: StrapiFormat;
        large?: StrapiFormat;
    } | null;
};

type FrontPageText = {
    id: number;
    LandingPageHeader?: string | null;
    LandingPageText?: string | null;
    ButtonText?: string | null;
    // Strapi v5 often returns media directly as object/array; your current example shows null.
    LandingPageImage?: StrapiMedia | { data?: { attributes?: StrapiMedia } } | null;
};

type FrontPageResponse = { data: FrontPageText[] };

export type HomeApiData = {
    header?: string;
    text?: string;
    buttonText?: string;
    image?: {
        src: string;
        alt: string;
        srcSet?: string;
        sizes?: string;
    };
};

const pickFirst = <T,>(arr?: T[] | null) => (arr && arr.length ? arr[0] : null);

// Supports both direct media object and v4-style { data: { attributes } }
function extractMedia(maybe: any): StrapiMedia | null {
    if (!maybe) return null;
    if (maybe.url) return maybe as StrapiMedia;
    const attr = maybe?.data?.attributes;
    if (attr?.url) return attr as StrapiMedia;
    return null;
}

function buildSrcSet(formats?: StrapiMedia["formats"] | null) {
    if (!formats) return undefined;
    const candidates: Array<{ url: string; w: number }> = [];
    if (formats.thumbnail?.url) candidates.push({ url: formats.thumbnail.url, w: formats.thumbnail.width ?? 110 });
    if (formats.small?.url) candidates.push({ url: formats.small.url, w: formats.small.width ?? 354 });
    if (formats.medium?.url) candidates.push({ url: formats.medium.url, w: formats.medium.width ?? 531 });
    if (formats.large?.url) candidates.push({ url: formats.large.url, w: formats.large.width ?? 708 });
    if (!candidates.length) return undefined;
    return candidates.map(c => `${c.url} ${c.w}w`).join(", ");
}

export async function fetchFrontPage(): Promise<HomeApiData | null> {
    const baseUrl = process.env.REACT_APP_API_URL; // should end with /api/
    const token = process.env.REACT_APP_BEARER_TOKEN;

    if (!baseUrl) throw new Error("Missing REACT_APP_API_URL");

    const url = `${baseUrl}front-page-texts?populate=*`;

    const res = await fetch(url, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Strapi request failed: ${res.status} ${text}`);
    }

    const json = (await res.json()) as FrontPageResponse;
    const entry = pickFirst(json.data);
    if (!entry) return null;

    const header = entry.LandingPageHeader?.trim() || undefined;
    const text = entry.LandingPageText?.trim() || undefined;
    const buttonText = entry.ButtonText?.trim() || undefined;

    const media = extractMedia(entry.LandingPageImage);
    const image = media?.url
        ? {
            src: media.url,
            alt: (media.alternativeText ?? media.name ?? "Landing page image").trim(),
            srcSet: buildSrcSet(media.formats),
            sizes: "(max-width: 600px) 95vw, (max-width: 1024px) 80vw, 60vw",
        }
        : undefined;

    return { header, text, buttonText, image };
}
