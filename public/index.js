import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { defaultFormConfig } from "./utils/constants.js";
const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
];
const editProfileForm = document.querySelector("#edit-profile-form");
const editProfileFormValidator = new FormValidator(defaultFormConfig, editProfileForm);
const newCardForm = document.querySelector("#new-card-form");
const newCardFormValidator = new FormValidator(defaultFormConfig, newCardForm);
const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__description",
});
editProfileFormValidator.enableValidation();
newCardFormValidator.enableValidation();
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();
const handleCardClick = (name, link) => {
    imagePopup.open(name, link);
};
const cardsList = document.querySelector(".cards__list");
const cardSection = new Section({
    items: initialCards,
    renderer: (cardData) => {
        const card = new Card(cardData, "#template__card", handleCardClick);
        cardSection.addItem(card.createCard());
    },
}, ".cards__list");
cardSection.renderItems();
const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
    userInfo.setUserInfo({
        name: data.name ?? "",
        job: data.description ?? "",
    });
});
editProfilePopup.setEventListeners();
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    const editProfileFormElement = document.querySelector("#edit-profile-form");
    const nameInput = editProfileFormElement.querySelector("#name");
    const descriptionInput = editProfileFormElement.querySelector("#description");
    nameInput.value = userData.name;
    descriptionInput.value = userData.job;
    editProfilePopup.open();
    editProfileFormValidator.resetValidation();
});
const newCardPopup = new PopupWithForm("#new-card-popup", (data) => {
    const card = new Card({
        name: data["place-name"] ?? "",
        link: data.link ?? "",
    }, "#template__card", handleCardClick);
    cardsList.prepend(card.createCard());
});
newCardPopup.setEventListeners();
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => {
    newCardFormValidator.resetValidation();
    newCardPopup.open();
});
//# sourceMappingURL=index.js.map