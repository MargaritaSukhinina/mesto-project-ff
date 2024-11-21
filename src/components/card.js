
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardItem = cardTemplate.querySelector('.card');

// @todo: Функция создания карточки

export const createCard = (cardData, userId, myId, cardId, likes, getLike, deleteLike, deleteCard, openImagePopup, deleteUserCard, getLikeCard, deleteLikeCard) => {
    const card = cardItem.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardDeleteButton = card.querySelector('.card__delete-button');
    const likeCard = card.querySelector('.card__like-button');
    const cardLikeCounter = card.querySelector('.card__like-number')

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    card.querySelector('.card__title').textContent = cardData.name;
    card.dataset.cardId = cardId;
    
    if (userId !== myId) {
        cardDeleteButton.remove()
    }
     
    cardDeleteButton.addEventListener('click', function() { 
        deleteUserCard(cardId)
        deleteCard(card)
    });

    cardImage.addEventListener('click', function() {
        openImagePopup(cardData)
    });

    if (likes) {
        cardLikeCounter.textContent = likes.length;
    }

    likeCard.addEventListener('click', function() {
        if (likeCard.classList.contains('card__like-button_is-active') === false) {
            getLikeCard(cardId)
                .then((cardData) => {
                    cardLikeCounter.textContent = cardData.likes.length;
                    getLike(likeCard)
            })
        } else  {
            deleteLikeCard(cardId)
                .then((Data) => {
                    cardLikeCounter.textContent = Data.likes.length;
                    deleteLike(likeCard)
            })
        }
    });

    return card
}


//Функции лайка
export const getLike = (element) => {
    element.classList.add('card__like-button_is-active');
}

export const deleteLike = (element) => {
    element.classList.remove('card__like-button_is-active')
}

// @todo: Функция удаления карточки
export const deleteCard = (element) => {
    element.remove();
} 