interface FormConfig {
    inputs: string;
    buttonElement: string;
    inactiveButtonClass: string;
    invalidInputClass: string;
    errorElementClass: string;
}

export class FormValidator {
    objectConfig: FormConfig;
    element: HTMLFormElement;

    constructor(objectConfig: FormConfig, element: HTMLFormElement) {
        this.element = element;
        this.objectConfig = objectConfig;
    }

    private showInputError(input: HTMLInputElement): void {
        const errorElement = this.element.querySelector(
            `#${input.id}-input-error`,
        ) as HTMLElement ;

        if (!errorElement) {
            return;
        }

        input.classList.add(this.objectConfig.invalidInputClass);
        errorElement.classList.add(this.objectConfig.errorElementClass);
        errorElement.textContent = input.validationMessage;
    }

    private hideInputError(input: HTMLInputElement): void {
        const errorElement = this.element.querySelector(
            `#${input.id}-input-error`,
        ) as HTMLElement ;

        if (!errorElement) {
            return;
        }

        input.classList.remove(this.objectConfig.invalidInputClass);
        errorElement.classList.remove(this.objectConfig.errorElementClass);
        errorElement.textContent = "";
    }

    private checkInputValidity(input: HTMLInputElement): void {
        input.setCustomValidity("");

        if (input.validity.valueMissing) {
            input.setCustomValidity("Por favor, rellena este campo.");
        } else if (input.validity.typeMismatch) {
            input.setCustomValidity("Por favor, introduce una dirección web.");
        }

        if (!input.validity.valid) {
            this.showInputError(input);
        } else {
            this.hideInputError(input);
        }
    }

    private hasInvalidInput(inputList: NodeListOf<HTMLInputElement>): boolean {
        return Array.from(inputList).some((input) => !input.validity.valid);
    }

    private toggleButtonState(
        inputList: NodeListOf<HTMLInputElement>,
        buttonElement: HTMLButtonElement,
    ): void {
        if (this.hasInvalidInput(inputList)) {
            buttonElement.disabled = true;
            buttonElement.classList.add(this.objectConfig.inactiveButtonClass);
        } else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(this.objectConfig.inactiveButtonClass);
        }
    }

    private setEventListeners(): void {
        const inputList = this.element.querySelectorAll<HTMLInputElement>(
            this.objectConfig.inputs,
        );
        const buttonElement = this.element.querySelector(
            this.objectConfig.buttonElement,
        ) as HTMLButtonElement;

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

    enableValidation(): void {
        this.setEventListeners();
    }

    resetValidation(): void {
        const inputList = this.element.querySelectorAll<HTMLInputElement>(
            this.objectConfig.inputs,
        );
        const buttonElement = this.element.querySelector(
            this.objectConfig.buttonElement,
        ) as HTMLButtonElement ;

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
