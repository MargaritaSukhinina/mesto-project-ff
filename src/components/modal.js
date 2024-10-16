const popupElement = document.querySelectorAll('.popup');
const popupContentImage = document.querySelector('.popup__image');
const popupContentCaption = document.querySelector('.popup__caption');

//добавление классов для плавного перехода
function addAnimatedClassToPopups() {
        popupElement.forEach(function(element) {
        element.classList.add('popup_is-animated')
    })
}

//Открытие модального окна
function openPopup(element) {
    element.classList.toggle('popup_is-opened');

    function closeByKey(evt) {
        if (evt.code === 'Escape') {
            closePopup(element)
        };
    }

    document.addEventListener('keydown', 
        closeByKey   
    );

    function closeByOvelayClick(evt) {
        if (evt.target === element) {
            closePopup(element)
        }
    };

    element.addEventListener('click',         
        closeByOvelayClick
    )
}

//Закрытие модального окна
function closePopup(element) {
    element.classList.toggle('popup_is-opened');

    document.removeEventListener('keydown', closeByKey);
    document.removeEventListener('click', closeByOvelayClick)
}

//Открытие картинки
function openImagePopup(element, cardData) {
    openPopup(element)
    addImageContent(cardData)
}


//Добавление изображения для модального окна карточки
function addImageContent(cardData) {
    popupContentImage.src = cardData.link;
    popupContentImage.alt = cardData.name;
    popupContentCaption.textContent = cardData.name;
}

export {openPopup, closePopup, addAnimatedClassToPopups, openImagePopup}