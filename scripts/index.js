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

initialCards.forEach((card) => {
  console.log(card.name);
});

const perfilModal = document.querySelector("#edit-popup");
const editarPerfilbtn = document.querySelector(".profile__edit-button");
const closeBtn = perfilModal.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editForm = document.querySelector("#edit-profile-form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const aboutInput = editForm.querySelector(".popup__input_type_description");

const openModal = function (modal) {
  modal.classList.add("popup_is-opened");
};

const closeModal = function (modal) {
  modal.classList.remove("popup_is-opened");
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
