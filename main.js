(()=>{"use strict";var t=document.querySelector("#card-template").content.querySelector(".card");function n(e,n,o){var r=t.cloneNode(!0),c=r.querySelector(".card__image"),p=r.querySelector(".card__delete-button"),u=r.querySelector(".card__like-button");return c.src=e.link,c.alt=e.name,r.querySelector(".card__title").textContent=e.name,p.addEventListener("click",(function(){n(r)})),c.addEventListener("click",(function(){o(e)})),u.addEventListener("click",(function(){u.classList.toggle("card__like-button_is-active")})),r}function o(e){e.remove()}function r(e){"Escape"===e.code&&u(document.querySelector(".popup_is-opened"))}function c(e){var t=document.querySelector(".popup_is-opened");e.target===t&&u(t)}function p(e){e.classList.toggle("popup_is-opened"),document.addEventListener("keydown",r),e.addEventListener("click",c)}function u(t){t.classList.toggle("popup_is-opened"),document.removeEventListener("keydown",r),e.removeEventListener("click",c)}var i=document.querySelector(".places__list"),d=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),a=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),_=document.querySelectorAll(".popup"),m=document.querySelector(".popup__image"),y=document.querySelector(".popup__caption"),v=document.querySelector(".popup_type_image");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=n(e,o,j);i.append(t)}));var f=d.querySelector(".popup__form"),k=f.querySelector(".popup__input_type_name"),q=f.querySelector(".popup__input_type_description"),S=document.querySelector(".profile__title").textContent,L=document.querySelector(".profile__description").textContent,g=l.querySelector(".popup__form"),E=g.querySelector(".popup__input_type_card-name"),h=g.querySelector(".popup__input_type_url"),x=document.querySelector(".profile__title"),b=document.querySelector(".profile__description");function j(e){p(v),function(e){m.src=e.link,m.alt=e.name,y.textContent=e.name}(e)}a.addEventListener("click",(function(){p(d),k.value=S,q.value=L})),f.addEventListener("submit",(function(e){e.preventDefault(),x.textContent=k.value,b.textContent=q.value,f.reset(),u(d)})),s.addEventListener("click",(function(){p(l)})),g.addEventListener("submit",(function(e){e.preventDefault();var t=n({name:E.value,link:h.value},o,j);i.prepend(t),g.reset(),u(l)})),_.forEach((function(e){e.classList.add("popup_is-animated")}));var C=d.querySelector(".popup__close"),w=l.querySelector(".popup__close"),D=v.querySelector(".popup__close");C.addEventListener("click",(function(){u(d)})),w.addEventListener("click",(function(){u(l)})),D.addEventListener("click",(function(){u(v)}))})();