// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;
const cardItem = cardTemplate.querySelector('.card');

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');


// @todo: Функция создания карточки

function createCard(cardData, deleteCard) {
    const card = cardItem.cloneNode(true);

    const cardImage = card.querySelector('.card__image');
    const cardDeleteButton = card.querySelector('.card__delete-button');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    card.querySelector('.card__title').textContent = cardData.name;

    cardDeleteButton.addEventListener('click', function() { 
        deleteCard(card);
      });
    
    return card
}

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
  } 
 
// @todo: Вывести карточки на страницу
initialCards.forEach(function(cardData) {
    const card = createCard(cardData, deleteCard);
    cardList.append(card);
})