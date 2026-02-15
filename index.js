import{a as d,S as f,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="54654326-693c693fec20ccb1a66ef61d3";function m(r){return d.get("https://pixabay.com/api/",{params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>(console.log("photo:",o.data),o.data)).catch(o=>console.log(o))}const g=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const i=r.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:c,downloads:u})=>`
    <li class="list">
        <a class="gallery-link" href="${s}">
            <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
            />
        </a>
         <div class="stats">
                <p>❤️ Вподобайок: ${t}</p>
                <p>👁️ Переглядів: ${n}</p>
                <p>💬 Коментарів: ${c}</p>
                <p>⬇️ Завантажень: ${u}</p>
            </div>
    </li> 

    `).join("");g.insertAdjacentHTML("beforeend",i),y.refresh(),console.log("✅ Галерея створена!")}function L(){const r=document.querySelector(".gallery");r.innerHTML=""}function b(){document.querySelector(".loader").classList.add("is-visible")}function S(){document.querySelector(".loader").classList.remove("is-visible")}const l=document.querySelector(".form"),q=l.querySelector("input");document.querySelector(".gallery");l.addEventListener("submit",v);function v(r){r.preventDefault();const i=q.value.trim().toLowerCase();if(!i){a.error({message:"This field cannot be empty. Please fill out this field.",position:"topRight"});return}L(),b(),setTimeout(()=>{m(i).then(o=>{const s=o.hits;if(s.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log("Знайдено зображень:",s.length),h(s)}).catch(o=>{concole.log(o),a.error({message:"Сталася помилка при запиті",position:"topRight"})}).finally(()=>{S(),l.reset()})},3e3)}
//# sourceMappingURL=index.js.map
