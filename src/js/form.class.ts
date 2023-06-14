export class Checkout {
    form: HTMLFormElement;
    status: HTMLSpanElement;

    constructor(form: HTMLFormElement, status: HTMLSpanElement) {
        this.form = form;
        this.status = status;
    }

    // Função para vericar inputs que são obrigatórios
    _handleInputs(): void {
        console.log("inputs", this.form);
    }

    // Função para lidar com as mensagens de status
    _handleStatus(text: string, error: boolean): void {
        this.status.innerHTML = text;
        if (error) {
            this.status.classList.add("is-error");
        }
    }

    _handleCleanStatus(): void {
        this.status.innerHTML = "";
        if (this.status.classList.contains("is-error")) {
            this.status.classList.remove("is-error");
        }
    }

    _handleLoading(show: boolean): void {
        if (show) {
            this.form.classList.add("is-loading");
        } else {
            if (this.form.classList.contains("is-loading")) {
                this.form.classList.remove("is-loading");
            }
        }
    }
}
