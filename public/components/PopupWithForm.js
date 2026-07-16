import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    handleFormSubmit;
    form;
    submitBtn;
    submitBtnText;
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this.form = this.element.querySelector("form");
        this.handleFormSubmit = handleFormSubmit;
        this.submitBtn = this.element.querySelector(".popup__button");
        this.submitBtnText = this.submitBtn.textContent || "";
    }
    getInputValues() {
        const formValues = {};
        Array.from(this.form.elements).forEach((element) => {
            if (element.tagName === "INPUT") {
                const inputElement = element;
                formValues[inputElement.name] = inputElement.value;
            }
        });
        return formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this.getInputValues());
        });
    }
    close() {
        this.form.reset();
        super.close();
    }
    renderLoading(isLoading) {
        if (isLoading) {
            this.submitBtn.textContent = "Guardando...";
        }
        else {
            this.submitBtn.textContent = this.submitBtnText;
        }
    }
}
//# sourceMappingURL=PopupWithForm.js.map