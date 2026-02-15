//У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, 
// усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. 
// Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх
//  у відповідний момент.

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Імпортуємо наші функції
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.querySelector("input")
const gallery = document.querySelector(".gallery");



form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    
    const query = input.value.trim().toLowerCase();
    if (!query){
        iziToast.error({
            message:`Введіть будь ласка щось`,
            position: 'topRight',
        })
        return
    }
     // Очищаємо галерею перед новим пошуком
    clearGallery();
     // ПОКАЗУЄМО крутилку
    showLoader();


   setTimeout(() => {
    getImagesByQuery(query)
   .then(data => {
        const images= data.hits;
     if (images.length === 0){
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
        })
        return;

     } 
     console.log("Знайдено зображень:", images.length);
     createGallery(images);
      
   })
   .catch(error => {
    concole.log(error);
    iziToast.error({
            message: "Сталася помилка при запиті",
            position: "topRight",
        });
   })
    .finally(() => {
            // ХОВАЄМО крутилку в будь-якому випадку
            hideLoader();
            form.reset();  // очищаємо інпут завжди
        });
    }, 3000);
   
}



