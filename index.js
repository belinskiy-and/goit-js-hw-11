import{a as p,S as u,i as m}from"./assets/vendor-CesYmgD5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="30502065-ccf9dfd8afed44df162e05d97",d="https://pixabay.com/api/";function y(r){return p(`${d}`,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const a=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(r){if(r.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}a.innerHTML=r.map(({tags:s,webformatURL:i,largeImageURL:l,likes:e,comments:t,views:o,downloads:n})=>`
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
            <p class="properties-value">${n}</p>
          </li>
        </ul>
      </div>
    </a>
  </li>  
  `).join(""),g.refresh()}function L(){a.innerHTML=""}function v(){c.classList.add("visible")}function b(){c.classList.remove("visible")}const S=document.querySelector(".form");S.addEventListener("submit",E);function E(r){r.preventDefault(),L();const s=r.target.elements["search-text"].value.trim();s||console.log("Enter search text"),v(),y(s).then(({data:i})=>{h(i.hits)}).catch(i=>{console.log("error",i)}).finally(()=>{r.target.reset(),b()})}
//# sourceMappingURL=index.js.map
