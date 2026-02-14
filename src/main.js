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
const input = document.querySelector("input")
const button = document.querySelector("button");
const gallery = document.querySelector(".gallery");

// 🧪 ТЕСТУВАННЯ - викликаєте тут!
console.log("🧪 Тестуємо запит до API...");
getImagesByQuery("cats") // 👈 ТУТ ВИКЛИКАЄТЕ для тесту
    .then(data => {
        console.log("📦 Отримано фото:", data.hits.length);
        createGallery(data.hits); // 👈 ТУТ СТВОРЮЄТЬСЯ ГАЛЕРЕЯ
    })
    .catch(error => {
        console.error("❌ Помилка:", error);
    });