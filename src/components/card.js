import {popup, openPopup, addImageContent} from './modal';

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
        openPopup(popup.popupImage)
        addImageContent(cardData)
    })

    likeCard.addEventListener('click', function(evt) {
        const evtTarget = evt.target;
        evtTarget.classList.toggle('card__like-button_is-active');
    })
    
    return card
}

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
  } 

  export {createCard, deleteCard}
  