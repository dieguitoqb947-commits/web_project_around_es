export class Card {
    cardImage;
    cardElement;
    cardLikeButton;
    cardDeleteButton;
    objectCard;
    templateSelector;
    handleCardClick;
    constructor(objectCard, templateSelector, handleCardClick) {
        this.objectCard = objectCard;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.templateSelector);
        this.cardElement = cardTemplate.content.firstElementChild.cloneNode(true);
        return this.cardElement;
    }
    fillCard() {
        const cardTitle = this.cardElement.querySelector(".card__title");
        this.cardImage = this.cardElement.querySelector(".card__image");
        this.cardLikeButton = this.cardElement.querySelector(".card__like-button");
        this.cardDeleteButton = this.cardElement.querySelector(".card__delete-button");
        cardTitle.textContent = this.objectCard.name;
        this.cardImage.src = this.objectCard.link;
        this.cardImage.alt = this.objectCard.name;
    }
    createCard() {
        const card = this.getTemplate();
        this.fillCard();
        this.setEventListeners();
        return card;
    }
    setEventListeners() {
        this.cardImage.addEventListener("click", () => {
            this.handleCardClick(this.objectCard.name, this.objectCard.link);
        });
        this.cardLikeButton.addEventListener("click", () => {
            this.cardLikeButton.classList.toggle("card__like-button_is-active");
        });
        this.cardDeleteButton.addEventListener("click", () => {
            this.cardElement.remove();
        });
    }
}
//# sourceMappingURL=Card.js.map