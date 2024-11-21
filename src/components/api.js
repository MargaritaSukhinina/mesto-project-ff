
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-26',
    headers: {
        authorization: '4816f084-f424-428a-88ce-29db028007bf',
        'Content-Type': 'application/json'
    }
}

//загрузка информации о пользователе с сервера
export const getUsersData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
        .catch((err) => {
            console.log(`Oшибка: ${err}`)
        })

}
// получение карточек с сервера
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
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
    .then((res) => {
        if(res.ok) {
          return res.json() 
        }
    })
    .catch((err) => {
        console.log(`Oшибка: ${err}`)
    })
}

// аватар пользователя
export const editUserAvatar = () => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: 'https://sun9-65.userapi.com/impg/PhkyEvWIrAWjPsXcVsnJlhKnXE57gpq3YZScUw/sviewac9vJU.jpg?size=928x1217&quality=95&sign=f93759a54de4018d6d55c398f2cef068&type=album'
        })
    })
    .then((res) => {
        if(res.ok) {
          return res.json() 
        }
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`)
    })
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
    .then((res) => {
        if(res.ok) {
           return res.json() 
        }
    })
    .catch((err) => {
        console.log(`Oшибка: ${err}`)
    })

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
    .then((res) => {
        if (res.ok) {
            return res.json()
        }
    })
    .catch((err) => {
        console.log(`Oшибка: ${err}`)
    })
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
    .then((res) => {
        if(res.ok) {
           return res.json() 
        }
    })
    .catch((err) => {
        console.log(`Oшибка: ${err}`)
    })
}

export const deleteLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            _id: cardId
        })
    })
    .then((res) => {
        if(res.ok) {
           return res.json() 
        }
    })
    .catch((err) => {
        console.log(`Oшибка: ${err}`)
    })
}
