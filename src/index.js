import './styles/index.css';
import {initialCards} from './components/cards.js';
import {createCard, deleteCard, toggleLike, popupImage} from './components/card.js';
import {openPopup,closePopup, addAnimatedClassToPopups} from './components/modal.js';

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');

const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const buttonOpenProfileAdd = document.querySelector('.profile__add-button');

// @todo: Вывести карточки на страницу

initialCards.forEach(function(cardData) {
    const card = createCard(cardData, deleteCard);
    cardList.append(card);
})

// Открытие модальных окон
addAnimatedClassToPopups()

const formElement = popupEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const name = document.querySelector('.profile__title').textContent;
const job = document.querySelector('.profile__description').textContent;
const formNewCard = popupAdd.querySelector('.popup__form');
const textInput = formNewCard.querySelector('.popup__input_type_card-name');
const linkInput = formNewCard.querySelector('.popup__input_type_url');

function submitEditProfileFormt(evt) {
        evt.preventDefault();
        const nameInputOutput = document.querySelector('.profile__title');
        const jobInputOutput = document.querySelector('.profile__description');

        nameInputOutput.textContent = nameInput.value;
        jobInputOutput.textContent = jobInput.value;

        formElement.reset()
        closePopup(popupEdit)
    }

buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popupEdit)
    nameInput.value = name; 
    jobInput.value = job;
    submitEditProfileFormt 
})
formElement.addEventListener('submit', submitEditProfileFormt);

function handleFormSubmitCard(event) {
    event.preventDefault();

   const renderCard = {name: textInput.value, link: linkInput.value};

    const newCard = createCard(renderCard, deleteCard, toggleLike);
    cardList.prepend(newCard);
    
    formNewCard.reset()
    closePopup(popupAdd)
}

buttonOpenProfileAdd.addEventListener('click', function() {
    openPopup(popupAdd)
    handleFormSubmitCard
})
formNewCard.addEventListener('submit', handleFormSubmitCard);

//Закрытие модальных окон
const popupButtonCloseEdit = popupEdit.querySelector('.popup__close');
const popupButtonCloseAdd = popupAdd.querySelector('.popup__close');
const popupButtonCloseImage = popupImage.querySelector('.popup__close');


// клик на крестик
popupButtonCloseEdit.addEventListener('click', function() {
    closePopup(popupEdit)
})

popupButtonCloseAdd.addEventListener('click', function() {
    closePopup(popupAdd)
})

popupButtonCloseImage.addEventListener('click', function() {
    closePopup(popupImage)
})