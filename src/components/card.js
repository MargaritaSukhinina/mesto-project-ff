import { deleteUserCard } from "./api";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardItem = cardTemplate.querySelector('.card');

// @todo: Функция создания карточки

export const createCard = (cardData, myId, cardId, getLike, deleteLike, deleteCard, openImagePopup, getLikeCard, deleteLikeCard, changeLikeStatus, numberLike) => {
    const card = cardItem.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardDeleteButton = card.querySelector('.card__delete-button');
    const likeCard = card.querySelector('.card__like-button');
    const cardLikeCounter = card.querySelector('.card__like-number')

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    card.querySelector('.card__title').textContent = cardData.name;
    card.dataset.cardId = cardId;

    const userId = cardData.owner._id;
    const like = cardData.likes
    
    if (userId !== myId) {
        cardDeleteButton.remove()
    }
     
    cardDeleteButton.addEventListener('click', function() { 
        deleteCard(card, cardId)
    });

    cardImage.addEventListener('click', function() {
        openImagePopup(cardData)
    });

    numberLike(cardLikeCounter, like)

    const isLiked = cardData.likes.some((like) => like._id === myId)
    if (isLiked) {
        const likeCard = card.querySelector('.card__like-button')
        likeCard.classList.add('card__like-button_is-active')
    }

    likeCard.addEventListener('click', function() {
        changeLikeStatus(cardId, getLikeCard, deleteLikeCard, getLike, deleteLike, likeCard, cardLikeCounter)
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

export const numberLike = (cardLikeCounter, like) => {
    if (like) {
        cardLikeCounter.textContent = like.length;
    } else {
        cardLikeCounter.textContent = '0';
    }
}

export const changeLikeStatus = (cardId, getLikeCard, deleteLikeCard, getLike, deleteLike, likeCard, cardLikeCounter) => {
    if (likeCard.classList.contains('card__like-button_is-active') === false) {
        getLikeCard(cardId)
        .then((cardData) => {
            cardLikeCounter.textContent = cardData.likes.length;
            getLike(likeCard)
        })
        .catch((err) => {
            console.log(`Oшибка: ${err}`)
        })
    } else  {
        deleteLikeCard(cardId)
        .then((Data) => {
            cardLikeCounter.textContent = Data.likes.length;
            deleteLike(likeCard)
        })
        .catch((err) => {
            console.log(`Oшибка: ${err}`)
        })
    }
}

// @todo: Функция удаления карточки

export const deleteCard = (card, cardId) => {
    deleteUserCard(cardId)
    .then(() => {
        card.remove();
    })
    .catch((err) => {
        console.log(`Oшибка: ${err}`)
    })
} 

