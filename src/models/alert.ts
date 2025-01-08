export interface Alert {
    message: string;
    details?: string | null;
    variant: "danger" | "primary" | "warning" | "success";
}