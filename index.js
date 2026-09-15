import{a as u,S as m,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="30502065-ccf9dfd8afed44df162e05d97",d="https://pixabay.com/api/";function g(r){return u(`${d}`,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(r){n.innerHTML=r.map(({tags:s,webformatURL:i,largeImageURL:l,likes:e,comments:t,views:o,downloads:p})=>`
  <li class="gallery-item">
    <a href=" ${l}" class="gallery-link">
      <img
        src="${i}"
        alt="${s}"
        class="gallery-image"
      />
      <div class="gallery-item-content">
        <ul class="properties-list">
          <li class="properties-item">
            <p class="properties-title">Likes</p>
            <p class="properties-value">${e}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Views</p>
            <p class="properties-value">${o}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Comments</p>
            <p class="properties-value">${t}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Downloads</p>
            <p class="properties-value">${p}</p>
          </li>
        </ul>
      </div>
    </a>
  </li>  
  `).join(""),y.refresh()}function L(){n.innerHTML=""}function v(){c.classList.add("visible")}function b(){c.classList.remove("visible")}const S=document.querySelector(".form");S.addEventListener("submit",E);function E(r){r.preventDefault(),L();const s=r.target.elements["search-text"].value.trim();if(!s){a.error({message:"Enter search text",position:"topRight"});return}v(),g(s).then(({data:i})=>{if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits)}).catch(i=>{a.error({message:i.message,position:"topRight"})}).finally(()=>{r.target.reset(),b()})}
//# sourceMappingURL=index.js.map
