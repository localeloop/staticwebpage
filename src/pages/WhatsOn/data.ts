// src/pages/WhatsOn/data.ts

export type ComingUpData = {
    heading: string; // for LineBreaker
    image: {
        src: string;
        alt: string;
        srcSet?: string; // responsive
        sizes?: string;  // responsive
    } | null;
};

type StrapiImageFormat = {
    url: string;
    width?: number;
};

type StrapiPoster = {
    url: string;
    alternativeText?: string | null;
    name?: string | null;
    formats?: {
        thumbnail?: StrapiImageFormat;
        small?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        large?: StrapiImageFormat;
    };
};

type WeeklyEventsPosterItem = {
    id: number;
    Header?: string | null;
    Poster?: StrapiPoster[] | null;
    createdAt?: string;
    publishedAt?: string;
};

type WeeklyEventsPostersResponse = {
    data: WeeklyEventsPosterItem[];
};

const pickFirst = <T,>(arr?: T[] | null) => (arr && arr.length ? arr[0] : null);

// Build a srcSet from Strapi formats. If widths are missing, use sensible defaults.
function buildSrcSet(formats?: StrapiPoster["formats"]) {
    if (!formats) return undefined;

    const candidates: Array<{ url: string; w: number }> = [];

    if (formats.thumbnail?.url) candidates.push({ url: formats.thumbnail.url, w: formats.thumbnail.width ?? 110 });
    if (formats.small?.url) candidates.push({ url: formats.small.url, w: formats.small.width ?? 353 });
    if (formats.medium?.url) candidates.push({ url: formats.medium.url, w: formats.medium.width ?? 530 });
    if (formats.large?.url) candidates.push({ url: formats.large.url, w: formats.large.width ?? 707 });

    if (!candidates.length) return undefined;

    // e.g. "https://.../small.png 353w, https://.../medium.png 530w"
    return candidates.map(c => `${c.url} ${c.w}w`).join(", ");
}

export async function fetchComingUpFromWeeklyPosters(): Promise<ComingUpData> {
    const baseUrl = process.env.REACT_APP_API_URL;
    const token = process.env.REACT_APP_BEARER_TOKEN;

    if (!baseUrl) throw new Error("Missing REACT_APP_API_URL");

    // Sort newest first so you always get the latest entry
    const url = `${baseUrl}weekly-events-posters?populate=*&sort=publishedAt:desc`;

    const res = await fetch(url, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Strapi request failed: ${res.status} ${text}`);
    }

    const json = (await res.json()) as WeeklyEventsPostersResponse;
    const firstEntry = pickFirst(json.data);

    // Heading: use Header if present, else default
    const heading = (firstEntry?.Header?.trim() || "Coming up...");

    const poster = pickFirst(firstEntry?.Poster ?? null);

    if (!poster?.url) {
        return { heading, image: null };
    }

    const src = poster.url; // already absolute in your response
    const alt = (poster.alternativeText ?? poster.name ?? "Coming up poster").trim();

    const srcSet = buildSrcSet(poster.formats);

    // This tells the browser how big the image will render; tweak to your layout.
    // Example: on mobile, full width; on desktop, roughly 60vw.
    const sizes = "(max-width: 600px) 95vw, (max-width: 1024px) 80vw, 60vw";

    return {
        heading,
        image: { src, alt, srcSet, sizes },
    };
}
