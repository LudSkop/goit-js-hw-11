import{a,S as u}from"./assets/vendor-DvEE90iP.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="54654326-693c693fec20ccb1a66ef61d3";function f(o){return a.get("https://pixabay.com/api/",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(console.log("photo:",r.data),r.data)).catch(r=>console.log(r))}const d=document.querySelector(".gallery"),m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const c=o.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:s,comments:n,downloads:i})=>`
    <li class="list">
        <a class="gallery-link" href="${l}">
            <img
            class="gallery-image"
            src="${r}"
            alt="${e}"
            />
        </a>
         <div class="stats">
                <p>❤️ Вподобайок: ${t}</p>
                <p>👁️ Переглядів: ${s}</p>
                <p>💬 Коментарів: ${n}</p>
                <p>⬇️ Завантажень: ${i}</p>
            </div>
    </li> 

    `).join("");d.insertAdjacentHTML("beforeend",c),m.refresh(),console.log("✅ Галерея створена!")}document.querySelector(".form");document.querySelector("input");document.querySelector("button");document.querySelector(".gallery");console.log("🧪 Тестуємо запит до API...");f("cats").then(o=>{console.log("📦 Отримано фото:",o.hits.length),g(o.hits)}).catch(o=>{console.error("❌ Помилка:",o)});
//# sourceMappingURL=index.js.map
