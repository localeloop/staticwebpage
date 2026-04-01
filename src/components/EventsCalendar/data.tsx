import type { EventCardType, PerformanceType } from "./types";
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
	Performers?: ApiPerformer[];
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
		`${baseUrl}calendar-live-musics?` +
		`populate[PickPerformers][populate][Performers][populate]=*`;

	const res = await fetch(url, {
		headers: token ? { Authorization: `Bearer ${token}` } : undefined,
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Strapi request failed: ${res.status} ${text}`);
	}
	const json = (await res.json()) as ApiResponse;

	const events: EventCardType[] = [];
	for (const item of json.data ?? []) {
		for (const p of item.PickPerformers ?? []) {
			if (!p.Date) continue;

			const d = new Date(`${p.Date}T00:00:00`);
			if (Number.isNaN(d.getTime())) continue;

			events.push({
				date: p.Date,
				time: p.DayOfWeek ?? "",
				entryPrice: p.Price ?? undefined,
				description: p.Description ?? undefined,
				isLateLicense: p.IsLateLicense ?? undefined,

				bands: (p.Performers ?? [])
					.map((x: ApiPerformer) => ({
						image: "",
						description: x.Name ?? "",
					}))
					.filter(
						(b: { image: string; description: string }): b is {
							image: string;
							description: string;
						} => !!b.description
					)
			});
		}
	}

	return events;
}
