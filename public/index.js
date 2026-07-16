import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { defaultFormConfig } from "./utils/constants.js";
import { Api } from "./components/Api.js";
import { PopupWithConfirmation } from "./components/PopupWithConfirmation.js";
const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1/",
    headers: {
        authorization: "8f2758f2-2ce5-4f69-9cc7-b67f47a757af",
        "Content-Type": "application/json"
    }
});
let currentUserId;
const editProfileForm = document.querySelector("#edit-profile-form");
const editProfileFormValidator = new FormValidator(defaultFormConfig, editProfileForm);
const newCardForm = document.querySelector("#new-card-form");
const newCardFormValidator = new FormValidator(defaultFormConfig, newCardForm);
const avatarForm = document.querySelector("#avatar-form");
const avatarFormValidator = new FormValidator(defaultFormConfig, avatarForm);
avatarFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
newCardFormValidator.enableValidation();
const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__description",
    avatarSelector: ".profile__image"
});
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();
const handleCardClick = (name, link) => {
    imagePopup.open(name, link);
};
const createCard = (cardData) => {
    const card = new Card(cardData, "#template__card", handleCardClick, (cardId, cardElement) => {
        deleteCardPopup.setSubmitAction(() => {
            api.deleteCard(cardId)
                .then(() => {
                cardElement.remove();
                deleteCardPopup.close();
            })
                .catch((err) => console.log("Error al eliminar la tarjeta:", err));
        });
        deleteCardPopup.open();
    }, (cardId, isLiked) => {
        api.changeLikeCardStatus(cardId, isLiked)
            .then((updatedCard) => {
            card.updateLikeStatus(updatedCard.isLiked);
        })
            .catch((err) => console.log("Error al actualizar Like:", err));
    }, currentUserId);
    return card.createCard();
};
const cardSection = new Section({
    items: [],
    renderer: (cardData) => {
        const cardElement = createCard(cardData);
        cardSection.addItem(cardElement);
    },
}, ".cards__list");
const init = async () => {
    try {
        const [userData, initialCards] = await Promise.all([
            api.getUserInfo(),
            api.getInitialCards()
        ]);
        currentUserId = userData._id;
        userInfo.setUserInfo({
            name: userData.name,
            job: userData.about,
            avatar: userData.avatar
        });
        cardSection.renderItems(initialCards);
    }
    catch (err) {
        console.log("Fallo al cargar los datos iniciales:", err);
    }
};
init();
const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
    editProfilePopup.renderLoading(true);
    api.editUserInfo({
        name: data.name ?? "",
        about: data.description ?? "",
    })
        .then((updateUserData) => {
        userInfo.setUserInfo({
            name: updateUserData.name,
            job: updateUserData.about,
            avatar: updateUserData.avatar
        });
        editProfilePopup.close();
    })
        .catch((err) => {
        console.error("Error al actualizar el perfil:", err);
    })
        .finally(() => {
        editProfilePopup.renderLoading(false);
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
    newCardPopup.renderLoading(true);
    api.addCard({
        name: data["place-name"] ?? "",
        link: data.link ?? ""
    })
        .then((newCardData) => {
        console.log("respuesta de addCard:", newCardData);
        console.log("owner nuevo:", newCardData.owner);
        console.log("owner._id nuevo:", newCardData.owner);
        console.log("currentUserId:", currentUserId);
        const cardElement = createCard(newCardData);
        cardSection.addItem(cardElement);
        newCardPopup.close();
    })
        .catch((err) => {
        console.error("Error al crear la nueva tarjeta:", err);
    })
        .finally(() => {
        newCardPopup.renderLoading(false);
    });
});
newCardPopup.setEventListeners();
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => {
    newCardFormValidator.resetValidation();
    newCardPopup.open();
});
const deleteCardPopup = new PopupWithConfirmation("#delete-popup");
deleteCardPopup.setEventListeners();
const editAvatarPopup = new PopupWithForm("#avatar-popup", (data) => {
    editAvatarPopup.renderLoading(true);
    api.updateAvatar({
        avatar: data.avatar ?? ""
    })
        .then((updatedUserData) => {
        userInfo.setUserInfo({
            name: updatedUserData.name,
            job: updatedUserData.about,
            avatar: updatedUserData.avatar
        });
        editAvatarPopup.close();
    })
        .catch((err) => {
        console.error("Error al actualizar el avatar:", err);
    })
        .finally(() => {
        editAvatarPopup.renderLoading(false);
    });
});
editAvatarPopup.setEventListeners();
const avatarEditButton = document.querySelector(".profile__avatar-button");
avatarEditButton.addEventListener("click", () => {
    editAvatarPopup.open();
});
//# sourceMappingURL=index.js.map