import './styles/index.css';
import {initialCards} from './components/cards.js';
import {createCard, deleteCard} from './components/card.js';
import {popup, openPopup,closePopup, animatedPopup} from './components/modal.js';

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const buttonOpenProfileAdd = document.querySelector('.profile__add-button');

// @todo: Вывести карточки на страницу
initialCards.forEach(function(cardData) {
    const card = createCard(cardData, deleteCard);
    cardList.append(card);
})

// Открытие модальных окон
animatedPopup()

buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popup.popupEdit)
    
    const formElement = popup.popupEdit.querySelector('.popup__form');
    const nameInput = formElement.querySelector('.popup__input_type_name');
    const jobInput = formElement.querySelector('.popup__input_type_description');

    const name = document.querySelector('.profile__title').textContent;
    const job = document.querySelector('.profile__description').textContent;

    nameInput.value = name;
    jobInput.value = job;

    function handleFormSubmit(evt) {
        evt.preventDefault();

        // Получите значение полей jobInput и nameInput из свойства value
        nameInput.textContent = nameInput.value;
        jobInput.textContent = jobInput.value;

         // Выберите элементы, куда должны быть вставлены значения полей
        const nameInputOutput = document.querySelector('.profile__title');
        const jobInputOutput = document.querySelector('.profile__description');

        //Вставьте новые значения с помощью textContent

        nameInputOutput.textContent = nameInput.textContent;
        jobInputOutput.textContent = jobInput.textContent;

        formElement.reset()
        closePopup(popup.popupEdit)
    }

    formElement.addEventListener('submit', handleFormSubmit);
    
})

buttonOpenProfileAdd.addEventListener('click', function() {
    openPopup(popup.popupAdd)

    const formNewCard = popup.popupAdd.querySelector('.popup__form');
    const textInput = formNewCard.querySelector('.popup__input_type_card-name');
    const linkInput = formNewCard.querySelector('.popup__input_type_url');

    function handleFormSubmitCard(event) {
        event.preventDefault();

       const renderCard = {name: textInput.value, link: linkInput.value};

        const newCard = createCard(renderCard, deleteCard);
        cardList.prepend(newCard);
        
        formNewCard.reset()
        closePopup(popup.popupAdd)
    }

    formNewCard.addEventListener('submit', handleFormSubmitCard)
})


//Закрытие модальных окон
const popupButtonCloseEdit = popup.popupEdit.querySelector('.popup__close');
const popupButtonCloseAdd = popup.popupAdd.querySelector('.popup__close');
const popupButtonCloseImage = popup.popupImage.querySelector('.popup__close');

// клик на крестик
popupButtonCloseEdit.addEventListener('click', function() {
    closePopup(popup.popupEdit)
})

popupButtonCloseAdd.addEventListener('click', function() {
    closePopup(popup.popupAdd)
})

popupButtonCloseImage.addEventListener('click', function() {
    closePopup(popup.popupImage)
})

// клавиша Escape
document.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape' && popup.popupEdit.classList.contains('popup_is-opened')) {
        closePopup(popup.popupEdit)
    }
})

document.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape' && popup.popupAdd.classList.contains('popup_is-opened')) {
        closePopup(popup.popupAdd)
    }
})

document.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape' && popup.popupImage.classList.contains('popup_is-opened')) {
        closePopup(popup.popupImage)
    }
})

// клик вне поля
popup.popupEdit.addEventListener('click', function(evt) {
    if (evt.target === popup.popupEdit) {
        closePopup(popup.popupEdit)
    }
})

popup.popupAdd.addEventListener('click', function(evt) {
    if (evt.target === popup.popupAdd) {
        closePopup(popup.popupAdd)
    }
})

popup.popupImage.addEventListener('click', function(evt) {
    if (evt.target === popup.popupImage) {
        closePopup(popup.popupImage)
    }
})