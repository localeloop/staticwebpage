import type { PerformanceType } from "./types";

type ApiPerformer = { id: number; Name?: string };

type ApiPerformance = {
	id: number;
	Date?: string; // "YYYY-MM-DD"
	DayOfWeek?: string;
	Description?: string;
	Price?: number | null;
	IsLateLicense?: boolean | null;
	Performers?: ApiPerformer[];
};

type ApiItem = {
	id: number;
	PickPerformers?: ApiPerformance[];
	Carousel?: unknown;
};

type ApiResponse = { data: ApiItem[] };

const shortDay = (day: string) => day.slice(0, 3);

export async function fetchEventData() {
	const baseUrl = process.env.REACT_APP_API_URL;
	const token = process.env.REACT_APP_BEARER_TOKEN;

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

	console.log(json);

	// key = "YYYY-MM" so different years don't collide
	const byMonth = new Map<string, PerformanceType[]>();

	for (const item of json.data ?? []) {
		for (const p of item.PickPerformers ?? []) {
			if (!p.Date) continue;

			const d = new Date(`${p.Date}T00:00:00`);
			if (Number.isNaN(d.getTime())) continue;

			const year = d.getFullYear();
			const month = String(d.getMonth() + 1).padStart(2, "0");
			const monthKey = `${year}-${month}`; // e.g. "2026-01"

			const performers = (p.Performers ?? [])
				.map(x => (x.Name ?? "").trim())
				.filter(Boolean);

			const perf: PerformanceType = {
				isoDate: p.Date, // keep exact date for filtering/sorting
				date: d.getDate(),
				day: p.DayOfWeek ? shortDay(p.DayOfWeek) : d.toLocaleString("en-GB", { weekday: "short" }),
				performers,
				description: p.Description ?? "",
				...(p.Price != null ? { price: p.Price } : {}),
			};

			const list = byMonth.get(monthKey) ?? [];
			list.push(perf);
			byMonth.set(monthKey, list);
		}
	}

	// Turn into array, sorted by monthKey, and label "Month YYYY"
	return Array.from(byMonth.entries())
		.sort(([a], [b]) => a.localeCompare(b)) // chronological by "YYYY-MM"
		.map(([monthKey, performances]) => {
			const [y, m] = monthKey.split("-").map(Number);
			const labelDate = new Date(y, (m ?? 1) - 1, 1);
			const monthLabel = labelDate.toLocaleString("en-GB", { month: "long" });
			const label = `${monthLabel} ${y}`;

			return {
				month: label,
				performances: performances
					.sort((a, b) => a.isoDate.localeCompare(b.isoDate)),
			};
		});
}
