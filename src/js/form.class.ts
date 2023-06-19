import { validateEmail } from "./utils";

export class Form {
    form: HTMLFormElement;
    status: HTMLSpanElement;
    error: boolean;

    constructor(form: HTMLFormElement, status: HTMLSpanElement) {
        this.form = form;
        this.status = status;
        this.error = false;
    }

    // Função para lidar com as mensagens de status
    _handleStatus(text: string, error: boolean): void {
        this.status.innerHTML = text;
        if (error) {
            this.status.classList.add("is-error");
        }
    }

    cleanStatus(): void {
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

    // Função para vericar inputs que são obrigatórios
    _handleInputs(): void {
        const inputs = Array.from(
            this.form.querySelectorAll<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >("input, textarea, select"),
        );

        inputs.map((input) => {
            const control = input.parentElement as HTMLDivElement;

            input.addEventListener("blur", () => {
                this._handleInputsErrors(control, input);
            });

            input.addEventListener("focus", () => {
                this.cleanErrors(control);
            });
        });
    }

    checkErrors(): void {
        const requireds = this.form.querySelectorAll<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >(".required");

        if (requireds) {
            requireds.forEach((input) => {
                const control = input.parentElement as HTMLDivElement;
                if (control?.classList.contains("form__input")) {
                    this.error = this._handleInputsErrors(control, input);
                }
            });
        }
    }

    insertErrors(
        span: HTMLSpanElement,
        text: string,
        control: HTMLDivElement,
    ): void {
        span.innerHTML = text;
        if (!control.classList.contains("is-error")) {
            control.classList.add("is-error");
        }
    }

    cleanErrors(control: HTMLDivElement): void {
        const span = control.querySelector("span") as HTMLSpanElement;
        span.innerHTML = "";
        control.classList.remove("is-error");
    }

    _handleInputsErrors(
        control: HTMLDivElement,
        input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
    ): boolean {
        const span = control.querySelector("span") as HTMLSpanElement;
        const required = input.classList.contains("required") as boolean;

        // Verifica se o input está vazio
        if (
            (input.required || required) &&
            (!input.value || input.value === "-1")
        ) {
            this.insertErrors(span, "Este é um campo obrigatório", control);
            return true;
        } else if (input.type == "email" && !validateEmail(input.value)) {
            this.insertErrors(span, "Digite um e-mail valido", control);
            return true;
        } else {
            return false;
        }
    }
}
