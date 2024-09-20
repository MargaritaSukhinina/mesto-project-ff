// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;
const cardItem = cardTemplate.querySelector('.card');

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');


// @todo: Функция создания карточки
function renderCard() {
    initialCards.forEach(function(element) {
        const card = cardItem.cloneNode(true);
        
        card.querySelector('.card__image').src = element.link;
        card.querySelector('.card__image').alt = element.name;
        card.querySelector('.card__title').textContent = element.name;

        cardList.append(card);

        deletCard(card)
    })
}

// @todo: Функция удаления карточки
function deletCard(card) {
    
    const cardDeleteButton = card.querySelector('.card__delete-button');
    
    cardDeleteButton.addEventListener('click', function() {
       card.remove();  
    });
}   

// @todo: Вывести карточки на страницу
renderCard()