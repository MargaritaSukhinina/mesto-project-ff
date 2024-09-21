// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;
const cardItem = cardTemplate.querySelector('.card');

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');


// @todo: Функция создания карточки

function creatCard() {
    const card = cardItem.cloneNode(true);

    const cardDeleteButton = card.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', function() {
       card.remove();  
    });

    return card
}

// @todo: Функция удаления карточки
 
// @todo: Вывести карточки на страницу
initialCards.forEach(function(cardData) {
    const card = creatCard(cardData);
    const cardImage = card.querySelector('.card__image');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    card.querySelector('.card__title').textContent = cardData.name;

    cardList.append(card);
})