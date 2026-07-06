import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(caption, link) {
        super.open();
        const image = this.element.querySelector(".popup__image");
        const captionText = this.element.querySelector(".popup__caption");
        if (link) {
            image.src = link;
        }
        if (caption) {
            captionText.textContent = caption;
            image.alt = caption;
        }
    }
}
//# sourceMappingURL=PopupWithImage.js.map