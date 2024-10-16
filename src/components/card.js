import {openImagePopup} from './modal'

const popupImage = document.querySelector('.popup_type_image');
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardItem = cardTemplate.querySelector('.card');

// @todo: Функция создания карточки

function createCard(cardData, deleteCard) {
    const card = cardItem.cloneNode(true);

    const cardImage = card.querySelector('.card__image');
    const cardDeleteButton = card.querySelector('.card__delete-button');
    const likeCard = card.querySelector('.card__like-button');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    card.querySelector('.card__title').textContent = cardData.name;

    cardDeleteButton.addEventListener('click', function() { 
        deleteCard(card);
    });
    
    cardImage.addEventListener('click', function() {
        openImagePopup(popupImage, cardData)
    });

    likeCard.addEventListener('click', function() {
        toggleLike(likeCard)
    });

    return card
}

//Функция лайка
function toggleLike(element) {
    element.classList.toggle('card__like-button_is-active');
}

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
} 

export {createCard, deleteCard, toggleLike, popupImage}
  