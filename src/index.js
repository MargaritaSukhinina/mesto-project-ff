import './styles/index.css';
import {initialCards} from './components/cards.js';
import {createCard, deleteCard} from './components/card.js';
import {openPopup,closePopup} from './components/modal.js';

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');

const buttonOpenProfileEdit = document.querySelector('.profile__edit-button');
const buttonOpenProfileAdd = document.querySelector('.profile__add-button');

const popupElement = document.querySelectorAll('.popup');
const popupContentImage = document.querySelector('.popup__image');
const popupContentCaption = document.querySelector('.popup__caption');
const popupImage = document.querySelector('.popup_type_image');

// @todo: Вывести карточки на страницу

initialCards.forEach(function(cardData) {
    const card = createCard(cardData, deleteCard, openImagePopup);
    cardList.append(card);
})

// Открытие модальных окон
const formElement = popupEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const name = document.querySelector('.profile__title').textContent;
const job = document.querySelector('.profile__description').textContent;
const formNewCard = popupAdd.querySelector('.popup__form');
const textInput = formNewCard.querySelector('.popup__input_type_card-name');
const linkInput = formNewCard.querySelector('.popup__input_type_url');
const nameInputOutput = document.querySelector('.profile__title');
const jobInputOutput = document.querySelector('.profile__description');

//форма редоктирования информации о себе
function submitEditProfileFormt(evt) {
        evt.preventDefault();
        
        nameInputOutput.textContent = nameInput.value;
        jobInputOutput.textContent = jobInput.value;

        formElement.reset()
        closePopup(popupEdit)
    }

buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popupEdit)
    nameInput.value = name; 
    jobInput.value = job;
})
formElement.addEventListener('submit', submitEditProfileFormt);

//форма добавления новой карточки
function handleFormSubmitCard(event) {
    event.preventDefault();

   const renderCard = {name: textInput.value, link: linkInput.value};

    const newCard = createCard(renderCard, deleteCard, openImagePopup);
    cardList.prepend(newCard);
    
    formNewCard.reset()
    closePopup(popupAdd)
}

buttonOpenProfileAdd.addEventListener('click', function() {
    openPopup(popupAdd)
})
formNewCard.addEventListener('submit', handleFormSubmitCard);

//Открытие картинки
function openImagePopup(cardData) {
    openPopup(popupImage)
    addImageContent(cardData)
}

//Добавление изображения для модального окна карточки
function addImageContent(cardData) {
    popupContentImage.src = cardData.link;
    popupContentImage.alt = cardData.name;
    popupContentCaption.textContent = cardData.name;
}

//добавление классов для плавного перехода
function addAnimatedClassToPopups() {
    popupElement.forEach(function(element) {
    element.classList.add('popup_is-animated')
})
}
addAnimatedClassToPopups()

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