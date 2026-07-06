export class FormValidator {
    objectConfig;
    element;
    constructor(objectConfig, element) {
        this.element = element;
        this.objectConfig = objectConfig;
    }
    showInputError(input) {
        const errorElement = this.element.querySelector(`#${input.id}-input-error`);
        if (!errorElement) {
            return;
        }
        input.classList.add(this.objectConfig.invalidInputClass);
        errorElement.classList.add(this.objectConfig.errorElementClass);
        errorElement.textContent = input.validationMessage;
    }
    hideInputError(input) {
        const errorElement = this.element.querySelector(`#${input.id}-input-error`);
        if (!errorElement) {
            return;
        }
        input.classList.remove(this.objectConfig.invalidInputClass);
        errorElement.classList.remove(this.objectConfig.errorElementClass);
        errorElement.textContent = "";
    }
    checkInputValidity(input) {
        input.setCustomValidity("");
        if (input.validity.valueMissing) {
            input.setCustomValidity("Por favor, rellena este campo.");
        }
        else if (input.validity.typeMismatch) {
            input.setCustomValidity("Por favor, introduce una dirección web.");
        }
        if (!input.validity.valid) {
            this.showInputError(input);
        }
        else {
            this.hideInputError(input);
        }
    }
    hasInvalidInput(inputList) {
        return Array.from(inputList).some((input) => !input.validity.valid);
    }
    toggleButtonState(inputList, buttonElement) {
        if (this.hasInvalidInput(inputList)) {
            buttonElement.disabled = true;
            buttonElement.classList.add(this.objectConfig.inactiveButtonClass);
        }
        else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(this.objectConfig.inactiveButtonClass);
        }
    }
    setEventListeners() {
        const inputList = this.element.querySelectorAll(this.objectConfig.inputs);
        const buttonElement = this.element.querySelector(this.objectConfig.buttonElement);
        if (!buttonElement) {
            return;
        }
        this.toggleButtonState(inputList, buttonElement);
        inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this.checkInputValidity(input);
                this.toggleButtonState(inputList, buttonElement);
            });
        });
    }
    enableValidation() {
        this.setEventListeners();
    }
    resetValidation() {
        const inputList = this.element.querySelectorAll(this.objectConfig.inputs);
        const buttonElement = this.element.querySelector(this.objectConfig.buttonElement);
        inputList.forEach((input) => {
            this.hideInputError(input);
        });
        if (!buttonElement) {
            return;
        }
        buttonElement.disabled = true;
        buttonElement.classList.add(this.objectConfig.inactiveButtonClass);
    }
}
//# sourceMappingURL=FormValidator.js.map