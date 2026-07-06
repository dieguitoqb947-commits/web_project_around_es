"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEventListeners = setEventListeners;
exports.resetValidation = resetValidation;
const inactiveButtonClass = "popup__button_disabled";
function showInputError(inputElement, errorMessage) {
    const formElement = inputElement.closest("form");
    const errorElement = formElement.querySelector(`#${inputElement.id}-input-error`);
    inputElement.classList.add("popup__input_invalid");
    errorElement.classList.add("popup__input-error_visible");
    errorElement.textContent = errorMessage;
}
function hideInputError(inputElement) {
    const formElement = inputElement.closest("form");
    const errorElement = formElement.querySelector(`#${inputElement.id}-input-error`);
    inputElement.classList.remove("popup__input_invalid");
    errorElement.classList.remove("popup__input-error_visible");
    errorElement.textContent = "";
}
function checkInputValidity(input) {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
        input.setCustomValidity("Por favor, rellena este campo.");
    }
    else if (input.validity.typeMismatch) {
        input.setCustomValidity("Por favor, introduce una dirección web.");
    }
    if (!input.validity.valid) {
        showInputError(input, input.validationMessage);
    }
    else {
        hideInputError(input);
    }
}
function hasInvalidInput(inputList) {
    return Array.from(inputList).some((input) => !input.validity.valid);
}
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(inactiveButtonClass);
    }
    else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(inactiveButtonClass);
    }
}
function setEventListeners(form) {
    const inputList = form.querySelectorAll(".popup__input");
    const buttonElement = form.querySelector('button[type="submit"]');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((input) => {
        input.addEventListener("input", () => {
            checkInputValidity(input);
            toggleButtonState(inputList, buttonElement);
        });
    });
}
function resetValidation(formElement) {
    const inputList = formElement.querySelectorAll(".popup__input");
    const buttonElement = formElement.querySelector('button[type="submit"]');
    inputList.forEach((input) => {
        hideInputError(input);
    });
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
}
//# sourceMappingURL=validate.js.map