export interface PerformanceType {
    date: number;
    day: string;
    performers: string[];
    price?: number;
    description?: string;
    isoDate: string;
}

export interface EventDataType {
    month: string;
    performances: PerformanceType[];
}

export interface EventBand {
    image: string;
    description?: string;
}


export interface ApiPerformer {
    id: number;
    Name: string;
}

export interface ApiItem {
    Date: string;
    DayOfWeek: string;
    Description?: string;
    IsLateLicense?: boolean;
    Price?: number;
    Performers?: ApiPerformer[];
}

export interface ApiResponse {
    data: ApiItem[];
}


export interface EventCardType {
    date: string;
    time: string;
    entryPrice?: number;

    description?: string; // 👈 event-level description
    isLateLicense?: boolean; // 👈 useful UI flag
    image?: string;

    bands: {
        description?: string;
    }[];
}