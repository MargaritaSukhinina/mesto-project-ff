const popup = {
    popupEdit: document.querySelector('.popup_type_edit'),
    popupAdd: document.querySelector('.popup_type_new-card'),
    popupImage: document.querySelector('.popup_type_image'),
    popupElement: document.querySelectorAll('.popup')
}

//добавление классов
function animatedPopup() {
        popup.popupElement.forEach(function(element) {
        element.classList.add('popup_is-animated')
    })
}

//Открытие модального окна
function openPopup(element) {
    element.classList.toggle('popup_is-opened');
}

//Закрытие модального окна
function closePopup(element) {
    element.classList.toggle('popup_is-opened');
}


//Добавление изображения для модального окна карточки
function addImageContent(imageElement) {
    const popupContentImage = popup.popupImage.querySelector('.popup__image');
    const popupContentCaption = popup.popupImage.querySelector('.popup__caption');
    
    popupContentImage.src = imageElement.link;
    popupContentImage.alt = imageElement.name;
    popupContentCaption.textContent = imageElement.name;
}

export {popup, openPopup, closePopup, addImageContent, animatedPopup}