export class Card {
    cardImage;
    cardElement;
    cardLikeButton;
    cardDeleteButton;
    objectCard;
    templateSelector;
    handleCardClick;
    handleDeleteClick;
    handleLikeClick;
    currentUserId;
    constructor(objectCard, templateSelector, handleCardClick, handleDeleteClick, handleLikeCLick, currentUserId) {
        this.objectCard = objectCard;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.handleDeleteClick = handleDeleteClick;
        this.handleLikeClick = handleLikeCLick;
        this.currentUserId = currentUserId;
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
        this.renderLikes();
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
            this.handleLikeClick(this.objectCard._id, this.objectCard.isLiked);
        });
        if (this.objectCard.owner !== this.currentUserId) {
            this.cardDeleteButton.remove();
            return;
        }
        this.cardDeleteButton.addEventListener("click", () => {
            this.handleDeleteClick(this.objectCard._id, this.cardElement);
        });
    }
    renderLikes() {
        if (this.objectCard.isLiked) {
            this.cardLikeButton.classList.add("card__like-button_is-active");
        }
        else {
            this.cardLikeButton.classList.remove("card__like-button_is-active");
        }
    }
    updateLikeStatus(isLiked) {
        this.objectCard.isLiked = isLiked;
        this.renderLikes();
    }
}
//# sourceMappingURL=Card.js.map