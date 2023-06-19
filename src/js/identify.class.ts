import { Form } from "./form.class";

export class Identify extends Form {
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
    }

    submitIdentify(): void {
        this._handleInputs();

        this.form?.addEventListener("submit", (e) => {
            e.preventDefault();

            this._handleLoading(true);
            this.cleanStatus();
            this.checkErrors();

            if (this.error) {
                this._handleLoading(false);
            }

            // setTimeout(() => {
            //     this._handleLoading(false);
            // }, 2000);
        });
    }
}
