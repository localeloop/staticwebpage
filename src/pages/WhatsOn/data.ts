// src/pages/WhatsOn/data.ts

export type ComingUpImage = {
    src: string;
    alt: string;
    srcSet?: string;
    sizes?: string;
};

export type ComingUpData = {
    heading: string;
    images: ComingUpImage[];
};

export type ComingUpState = {
    heading: string;
    images: {
        src: string;
        alt: string;
        srcSet?: string;
        sizes?: string;
    }[];
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

    return candidates.map(c => `${c.url} ${c.w}w`).join(", ");
}

export async function fetchComingUpFromWeeklyPosters(): Promise<ComingUpData> {
    const baseUrl = process.env.REACT_APP_API_URL;
    const token = process.env.REACT_APP_BEARER_TOKEN;

    if (!baseUrl) throw new Error("Missing REACT_APP_API_URL");

    const now = new Date();

    const startOfMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
    ).toISOString();

    const endOfMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59
    ).toISOString();

    const url =
        `${baseUrl}weekly-events-posters?` +
        `populate=*&` +
        `filters[publishedAt][$gte]=${startOfMonth}&` +
        `filters[publishedAt][$lte]=${endOfMonth}&` +
        `sort=publishedAt:asc`;


    const res = await fetch(url, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Strapi request failed: ${res.status} ${text}`);
    }

    const json = (await res.json()) as WeeklyEventsPostersResponse;

    console.log(json);

    const images: ComingUpImage[] = json.data.flatMap((entry) =>
        (entry.Poster ?? [])
            .filter((p): p is StrapiPoster => Boolean(p?.url))
            .map((poster) => ({
                src: poster.url,
                alt: (poster.alternativeText ?? poster.name ?? "Coming up poster").trim(),
                srcSet: buildSrcSet(poster.formats),
                sizes: "(max-width: 600px) 95vw, (max-width: 1024px) 80vw, 60vw",
            }))
    );

    const heading =
        now.toLocaleString("en-GB", { month: "long" }) + " events";

    return {
        heading,
        images,
    };
}