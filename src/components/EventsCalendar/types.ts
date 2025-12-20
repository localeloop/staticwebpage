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