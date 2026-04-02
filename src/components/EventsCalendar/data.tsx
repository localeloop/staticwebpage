import { EventCardType } from "./types";

export interface ApiPerformer {
	id: number;
	Name: string;
}
export interface ApiPickPerformer {
	Date: string;
	DayOfWeek: string;
	Description?: string | null;
	IsLateLicense?: boolean | null;
	Price?: number | null;
	Information?: ApiPerformer[];
	Image?: { url: string }[];
}

export interface ApiItem {
	id: number;
	PickPerformers?: ApiPickPerformer[];
}

export interface ApiResponse {
	data: ApiItem[];
}

const shortDay = (day: string) => day.slice(0, 3);

export async function fetchEventData(): Promise<EventCardType[]> {
	const token = process.env.REACT_APP_BEARER_TOKEN;

	const baseUrl = process.env.REACT_APP_API_URL;
	if (!baseUrl) throw new Error("Missing REACT_APP_API_URL");

	const url =
		`${baseUrl}calendar-live-musics?` + `populate[PickPerformers][populate]=*`;

	const res = await fetch(url, {
		headers: token ? { Authorization: `Bearer ${token} ` } : undefined,
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Strapi request failed: ${res.status} \n\n ${text} `);
	}
	const json = (await res.json()) as ApiResponse;

	const events: EventCardType[] = [];
	for (const item of json.data ?? []) {
		if (!item.PickPerformers?.length) continue;

		for (const p of item.PickPerformers) {
			if (!p.Date) continue;

			const d = new Date(`${p.Date}T00:00:00`);
			if (Number.isNaN(d.getTime())) continue;

			const imageUrl =
				p.Image?.[0]?.url
					? `${p.Image[0].url}`
					: "";

			events.push({
				date: p.Date,
				time: p.DayOfWeek ?? "",
				entryPrice: p.Price ?? undefined,
				description: p.Description ?? undefined,
				image: imageUrl, // 👈 shared image per event

				bands: (p.Information ?? []).map((x) => ({
					description: x.Name ?? "",
				})),
			});
		}
	}

	return events;
}
