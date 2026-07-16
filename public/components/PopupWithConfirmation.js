import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    confirmButton;
    handleSubmitAction;
    constructor(popupSelector) {
        super(popupSelector);
        this.confirmButton = this.element.querySelector(".popup__button");
    }
    setSubmitAction(action) {
        this.handleSubmitAction = action;
    }
    setEventListeners() {
        super.setEventListeners();
        this.confirmButton.addEventListener("click", () => {
            this.handleSubmitAction();
        });
    }
}
//# sourceMappingURL=PopupWithConfirmation.js.map