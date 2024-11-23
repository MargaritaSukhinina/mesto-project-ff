
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-26',
    headers: {
        authorization: '4816f084-f424-428a-88ce-29db028007bf',
        'Content-Type': 'application/json'
    }
}

const handleResponce = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(res.status);
}

//загрузка информации о пользователе с сервера
export const getUsersData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
    .then(handleResponce)
}

// получение карточек с сервера
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then(handleResponce)
}

// редактирование информации о пользователе
export const editUserData = (name, job) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: job
        })
    })
    .then(handleResponce)
}

// аватар пользователя
export const editUserAvatar = (myAvatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: myAvatar
        })
    })
    .then(handleResponce)
}

// добавление новой карточки
export const addCardToPage = (renderCard) => { 
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: renderCard.name,
            link: renderCard.link
        })
    })
    .then(handleResponce)
}

//удаление карточки
export const deleteUserCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            _id: cardId
        })
    })
    .then(handleResponce)
}

// постановка и удаление лайка
export const getLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers,
        body: JSON.stringify({
            _id: cardId
        })
    })
    .then(handleResponce)
}

export const deleteLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            _id: cardId
        })
    })
    .then(handleResponce)
}
