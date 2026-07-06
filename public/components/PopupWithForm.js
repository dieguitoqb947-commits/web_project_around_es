import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    handleFormSubmit;
    form;
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this.form = this.element.querySelector("form");
        this.handleFormSubmit = handleFormSubmit;
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
            this.close();
        });
    }
}
//# sourceMappingURL=PopupWithForm.js.map