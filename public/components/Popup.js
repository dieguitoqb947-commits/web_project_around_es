export class Popup {
    popupSelector;
    element;
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
        this.element = document.querySelector(this.popupSelector);
    }
    open() {
        this.element.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    close() {
        this.element.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }
    handleEscClose = (event) => {
        if (event.key === "Escape") {
            this.close();
        }
    };
    setEventListeners() {
        const closeBttn = this.element.querySelector(".popup__close");
        closeBttn.addEventListener("click", () => { this.close(); });
        this.element.addEventListener("click", (event) => {
            if (event.target === this.element) {
                this.close();
            }
        });
    }
}
//# sourceMappingURL=Popup.js.map