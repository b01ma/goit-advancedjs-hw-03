import{S as m,i}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const d="53028647-447da87338472664aa918ac68",g="https://pixabay.com/api/";function p(r,s=1,o=12){const a=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:o}),t=`${g}?${a}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found for your search query.");return e})}function h(r){const{webformatURL:s,largeImageURL:o,tags:a,likes:t,views:e,comments:n,downloads:f}=r;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img 
          class="gallery-image" 
          src="${s}" 
          alt="${a}" 
          loading="lazy" 
        />
        <div class="image-info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${t}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${e}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${n}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${f}</span>
          </div>
        </div>
      </a>
    </li>
  `}function y(r){return r.map(h).join("")}function w(r){r.innerHTML=""}function v(r){r.style.display="flex"}function c(r){r.style.display="none"}const L=document.getElementById("search-form"),u=document.getElementById("gallery"),l=document.getElementById("loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",E);async function E(r){r.preventDefault();const o=new FormData(r.target).get("searchQuery").trim();if(!o){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}w(u),v(l);let a=null;try{a=await p(o)}catch(e){c(l),e.message==="No images found for your search query."?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error("Error fetching images:",e)}c(l);const t=y(a.hits);u.innerHTML=t,b.refresh(),i.success({title:"Success",message:`Found ${a.totalHits} images!`,position:"topRight"}),r.target.reset()}
//# sourceMappingURL=index.js.map
