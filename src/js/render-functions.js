//У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном 
// та зберігай функції для відображення елементів інтерфейсу:
//createGallery(images). Ця функція повинна приймати масив images, 
// створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати 
// метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
//clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.
//  Нічого не повертає.
//showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. 
// Нічого не повертає.
//hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. 
// Нічого не повертає.



import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});



export function createGallery(images){
      const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>`
    <li class="list">
        <a class="gallery-link" href="${largeImageURL}">
            <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            />
        </a>
         <div class="stats">
                <p>❤️ Вподобайок: ${likes}</p>
                <p>👁️ Переглядів: ${views}</p>
                <p>💬 Коментарів: ${comments}</p>
                <p>⬇️ Завантажень: ${downloads}</p>
            </div>
    </li> 

    `).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
    console.log("✅ Галерея створена!");

}



export function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
};
export function showLoader() {
    const loader = document.querySelector(".loader");
    loader.classList.add('is-visible');

};
export function hideLoader(){
    const loader = document.querySelector(".loader");
    loader.classList.remove('is-visible');

}