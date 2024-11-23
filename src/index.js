import './styles/index.css';
import {createCard, deleteCard, getLike, deleteLike, changeLikeStatus, numberLike} from './components/card.js';
import {openPopup,closePopup} from './components/modal.js';
import {enableValidation, clearValidation} from './components/validation.js'
import {getUsersData, getInitialCards, editUserData, addCardToPage, deleteUserCard, getLikeCard, deleteLikeCard, editUserAvatar} from './components/api.js'

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
const popupAvatar = document.querySelector('.popup_avatar');
const avataiImage = document.querySelector('.profile__image')

// Модальные окона
const formElement = popupEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const formNewCard = popupAdd.querySelector('.popup__form');
const textInput = formNewCard.querySelector('.popup__input_type_card-name');
const linkInput = formNewCard.querySelector('.popup__input_type_url');
const nameInputOutput = document.querySelector('.profile__title');
const jobInputOutput = document.querySelector('.profile__description');
const avatarInput = document.querySelector('.popup__input_avatar');
const formAvatar = popupAvatar.querySelector('.popup__form');



//  получение данных с сервера
let myId = null;
let name = null;
let job = null;

const promises = [
    getUsersData(),
    getInitialCards(),
];

Promise.all(promises)
    .then(([userData, cardsArray]) => {
        myId = userData._id;
        name = userData.name;
        job = userData.about;
        nameInputOutput.textContent = userData.name;
        jobInputOutput.textContent = userData.about;
        avataiImage.style.backgroundImage = `url('${userData.avatar}')`
        cardsArray.forEach(function(cardData) {
            const cardUsers = createCard(cardData, myId, getLike, deleteLike, deleteCard, openImagePopup, getLikeCard, deleteLikeCard, changeLikeStatus, numberLike);
            cardList.append(cardUsers);
        })
    })
    .catch((err) => {
            console.log(`Oшибка: ${err}`)
    })

//редоктированиe информации о себе
function submitEditProfileFormt(evt) {
        evt.preventDefault();
        popupButton = popupEdit.querySelector('.popup__button');
        renderLoading(true)
        editUserData(nameInput.value, jobInput.value)
            .then((result) => {
                const profileUserData = result;
                return profileUserData
            })
            .then(() => {
                nameInputOutput.textContent = nameInput.value;
                jobInputOutput.textContent = jobInput.value;
                name = nameInputOutput.textContent;
                job = jobInputOutput.textContent;
                clearValidation(popupEdit, settings)
                closePopup(popupEdit)
            })
            .catch((err) => {
                console.log(`Oшибка: ${err}`)
            })
            .finally(() => {
                renderLoading(false)
            })     
    }

buttonOpenProfileEdit.addEventListener('click', function() {
    openPopup(popupEdit)
    nameInput.value = name; 
    jobInput.value = job;
    clearValidation(popupEdit, settings) 
})
formElement.addEventListener('submit', submitEditProfileFormt);

//avatar

function submitAvatarFormt(evt) {
    evt.preventDefault();
    popupButton = popupAvatar.querySelector('.popup__button');
    renderLoading(true)
    const myAvatar = avatarInput.value;
    editUserAvatar(myAvatar)
        .then((result) => {
            avataiImage.style.backgroundImage = `url('${result.avatar}')`
            clearValidation(popupAvatar, settings)
            closePopup(popupAvatar)
        })
        .catch((err) => {
            console.log(`Oшибка: ${err}`)
        })
        .finally(() => {
            renderLoading(false)
        })
}

avataiImage.addEventListener('click', function() {
    openPopup(popupAvatar)
    clearValidation(popupAvatar, settings)
    formAvatar.reset() 
})

formAvatar.addEventListener('submit', submitAvatarFormt);

//добавление новой карточки

function handleFormSubmitCard(event) {
    event.preventDefault();
    popupButton = popupAdd.querySelector('.popup__button');
    renderLoading(true)
    const renderCard = {name: textInput.value, link: linkInput.value};
    addCardToPage(renderCard)
    .then((newCardData) => {
        const newCard = createCard(newCardData, myId, getLike, deleteLike, deleteCard, openImagePopup, getLikeCard, deleteLikeCard, changeLikeStatus, numberLike)
        cardList.prepend(newCard)
        formNewCard.reset()
        closePopup(popupAdd)
    })
    .catch((err) => {
        console.log(`Oшибка: ${err}`)
    })
    .finally(() => {
        renderLoading(false)
    })
}

buttonOpenProfileAdd.addEventListener('click', function() {
    openPopup(popupAdd)
    clearValidation(popupAdd, settings)
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
const popupButtonCloseAvatar = popupAvatar.querySelector('.popup__close');


// клик на крестик
popupButtonCloseEdit.addEventListener('click', function() {
    closePopup(popupEdit)
})

popupButtonCloseAdd.addEventListener('click', function() {
    closePopup(popupAdd)
    clearValidation(popupAdd, settings)
})

popupButtonCloseImage.addEventListener('click', function() {
    closePopup(popupImage)
})

popupButtonCloseAvatar.addEventListener('click', function() {
    closePopup(popupAvatar)
})

 //Валидация форм

 const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}
enableValidation(settings)

// функция ожидания
let popupButton = null;
function renderLoading(isLoading) {
    if (isLoading) {
        popupButton.textContent = 'Сохранение...'
    } else {
        popupButton.textContent = 'Сохранить'
    }
}
