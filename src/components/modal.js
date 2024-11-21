//Открытие модального окна
function closeByKey(evt) {
    if (evt.code === 'Escape') {
        closePopup(document.querySelector('.popup_is-opened'))
    };
}

function closeByOvelayClick(evt) {
    const popupIsOpenened = document.querySelector('.popup_is-opened')
    if (evt.target === popupIsOpenened) {
        closePopup(popupIsOpenened)
    }
};

function openPopup(element) {
    element.classList.toggle('popup_is-opened');
    document.addEventListener('keydown', 
        closeByKey   
    );

    element.addEventListener('click',         
        closeByOvelayClick
    )
    
}

//Закрытие модального окна
function closePopup(element) {
    element.classList.toggle('popup_is-opened');

    document.removeEventListener('keydown', closeByKey);
    element.removeEventListener('click', closeByOvelayClick)
}

export {openPopup, closePopup}