import { Checkout } from "./form.class";

export class Identify extends Checkout {
    form: HTMLFormElement;
    status: HTMLSpanElement;

    constructor() {
        const form = document.getElementById(
            "form-identify",
        ) as HTMLFormElement;
        const status = form.querySelector(".status") as HTMLSpanElement;

        super(form, status);
        this.form = form;
        this.status = status;

        this.submitIdentify();
        console.log("identify");
    }

    submitIdentify(): void {
        this._handleInputs();

        this.form?.addEventListener("submit", (e) => {
            e.preventDefault();

            this._handleLoading(true);
            this._handleCleanStatus();

            setTimeout(() => {
                this._handleLoading(false);
            }, 2000);

            console.log("submeteu");
        });
    }
}
