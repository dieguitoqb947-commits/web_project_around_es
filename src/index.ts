import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { defaultFormConfig } from "./utils/constants.js";
import type { CardData } from "./components/Card.js";
import { Api } from "./components/Api.js";

const initialCards: CardData[] = [
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

const editProfileForm = document.querySelector("#edit-profile-form") as HTMLFormElement;
const editProfileFormValidator = new FormValidator(defaultFormConfig, editProfileForm);
const newCardForm = document.querySelector("#new-card-form") as HTMLFormElement;
const newCardFormValidator = new FormValidator(defaultFormConfig, newCardForm);
const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__description",
});

editProfileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const handleCardClick = (name: string, link: string): void => {
    imagePopup.open(name, link);
};

const cardsList = document.querySelector(".cards__list") as HTMLElement;
const cardSection = new Section<CardData>(
    {
        items: initialCards,
        renderer: (cardData) => {
            const card = new Card(cardData, "#template__card", handleCardClick);
            cardSection.addItem(card.createCard());
        },
    },
    ".cards__list",
);

cardSection.renderItems();

const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
    userInfo.setUserInfo({
        name: data.name ?? "",
        job: data.description ?? "",
    });
});

editProfilePopup.setEventListeners();

const editProfileButton = document.querySelector(".profile__edit-button") as HTMLButtonElement;

editProfileButton.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    const editProfileFormElement = document.querySelector("#edit-profile-form") as HTMLFormElement;
    const nameInput = editProfileFormElement.querySelector("#name") as HTMLInputElement;
    const descriptionInput = editProfileFormElement.querySelector("#description") as HTMLInputElement;

    nameInput.value = userData.name;
    descriptionInput.value = userData.job;

    editProfilePopup.open();
    editProfileFormValidator.resetValidation();
});

const newCardPopup = new PopupWithForm("#new-card-popup", (data) => {
    const card = new Card(
        {
            name: data["place-name"] ?? "",
            link: data.link ?? "",
        },
        "#template__card",
        handleCardClick,
    );

    cardsList.prepend(card.createCard());
});

newCardPopup.setEventListeners();

const addCardButton = document.querySelector(".profile__add-button") as HTMLButtonElement;

addCardButton.addEventListener("click", () => {
    newCardFormValidator.resetValidation();
    newCardPopup.open();
});


const api =  new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
        authorization: "faf3a66c-8e86-4ee5-b7eb-8532a2e5205d",
        "Content-Type": "application/json"
    }

})
