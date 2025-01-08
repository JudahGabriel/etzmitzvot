import { Alert } from "../models/alert";

class AlertService {
    events = new EventTarget();

    showError(message: string, details?: string) {
        this.showAlert(message, details, "danger");
    }

    showInfo(message: string, details?: string) {
        this.showAlert(message, details, "primary");
    }

    private showAlert(message: string, details: string | null | undefined, variant: "primary" | "danger" | "warning" | "success"): void {
        this.events.dispatchEvent(new CustomEvent<Alert>("alert", { detail: { message, details, variant } }));
    }
}

export const alertService = new AlertService();