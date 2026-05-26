import enableValidation, { resetValidation } from "./validate.js";
enableValidation();

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

const perfilModal = document.querySelector("#edit-popup");
const editarPerfilbtn = document.querySelector(".profile__edit-button");
const closeBtn = perfilModal.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editForm = document.querySelector("#edit-profile-form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const aboutInput = editForm.querySelector(".popup__input_type_description");
const imagePreview = document.querySelector("#image-popup");
const imagePreviewClsBtn = imagePreview.querySelector(".popup__close");
const imagePreviewImg = imagePreview.querySelector(".popup__image");
const imagePreviewTitle = imagePreview.querySelector(".popup__caption");
const popupElements = document.querySelectorAll(".popup");
const template = document.querySelector("#template__card");

imagePreviewClsBtn.addEventListener("click", () => {
  closeModal(imagePreview);
});

const getCardElement = function (
  name = "Sin titulo",
  link = "placeholder.jpg",
) {
  const cardElement = template.content.cloneNode(true);
  const cardName = cardElement.querySelector(".card__title");
  const cardLink = cardElement.querySelector(".card__image");

  cardName.textContent = name;
  cardLink.src = link;
  cardLink.alt = name;

  const likeBtn = cardElement.querySelector(".card__like-button");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-button_is-active");
  });

  const deleteBtn = cardElement.querySelector(".card__delete-button");
  deleteBtn.addEventListener("click", (event) => {
    const removeCard = event.target.closest(".card");
    removeCard.remove();
  });

  cardLink.addEventListener("click", () => {
    imagePreviewTitle.textContent = name;
    imagePreviewImg.src = link;
    imagePreviewImg.alt = name;
    openModal(imagePreview);
  });

  return cardElement;
};

const cardList = document.querySelector(".cards__list");

const renderCard = function (cardName, cardLink, cardList) {
  const cardElement = getCardElement(cardName, cardLink);
  cardList.prepend(cardElement);
};

initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardList);
});

const openModal = function (modal) {
  modal.classList.add("popup_is-opened");
};

const closeModal = function (modal) {
  modal.classList.remove("popup_is-opened");
  const form = modal.querySelector(".popup__form");
  if (form) {
    resetValidation(form);
  }
};

editarPerfilbtn.addEventListener("click", () => {
  openModal(perfilModal);
});

closeBtn.addEventListener("click", () => {
  closeModal(perfilModal);
});

const fillProfileForm = function () {
  let nameValue = profileTitle.textContent;
  let aboutValue = profileDescription.textContent;

  nameInput.value = nameValue;
  aboutInput.value = aboutValue;
};

const handleOpenEditModal = function (evt) {
  evt.preventDefault();
  fillProfileForm();
  openModal(perfilModal);
};

editarPerfilbtn.addEventListener("click", handleOpenEditModal);

const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let aboutValue = aboutInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = aboutValue;
  closeModal(perfilModal);
};

editForm.addEventListener("submit", handleProfileFormSubmit);

const profileAddBtn = document.querySelector(".profile__add-button");
const profileAddPlace = document.querySelector("#new-card-popup");
const profileAddClsBtn = profileAddPlace.querySelector(".popup__close");

profileAddBtn.addEventListener("click", () => {
  openModal(profileAddPlace);
});

profileAddClsBtn.addEventListener("click", () => {
  closeModal(profileAddPlace);
});

const addName = document.querySelector(".popup__input_type_card-name");
const addUrl = document.querySelector(".popup__input_type_url");
const createBtn = document.querySelector(".popup__button");
const newCardForm = document.querySelector("#new-card-form");

const handleCardFormSubmit = function (evt) {
  evt.preventDefault();

  let nameAddValue = addName.value;
  let urlAddValue = addUrl.value;
  const newcard = getCardElement(nameAddValue, urlAddValue);
  cardList.prepend(newcard);
  closeModal(profileAddPlace);

  newCardForm.reset();
};

newCardForm.addEventListener("submit", handleCardFormSubmit);

function overlayClick(popupElement) {
  popupElement.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target === element) {
        closeModal(element);
      }
    });
  });
}

overlayClick(popupElements);

function escapeKey() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");

      if (openedPopup) {
        closeModal(openedPopup);
      }
    }
  });
}

escapeKey();
