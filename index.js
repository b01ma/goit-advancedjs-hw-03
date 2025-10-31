import{S as m,i}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="53028647-447da87338472664aa918ac68",d="https://pixabay.com/api/";function p(r,a=1,o=12){const s=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o}),e=`${d}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).then(t=>{if(t.hits.length===0)throw new Error("No images found for your search query.");return t})}function h(r){const{webformatURL:a,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:f}=r;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img 
          class="gallery-image" 
          src="${a}" 
          alt="${s}" 
          loading="lazy" 
        />
        <div class="image-info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${e}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${t}</span>
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
  `}function y(r){return r.map(h).join("")}function v(r){r.innerHTML=""}function w(r){r.style.display="block"}function c(r){r.style.display="none"}const L=document.getElementById("search-form"),u=document.getElementById("gallery"),l=document.getElementById("loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",E);function E(r){r.preventDefault();const o=new FormData(r.target).get("searchQuery").trim();if(!o){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}v(u),w(l),p(o).then(s=>{c(l);const e=y(s.hits);u.innerHTML=e,b.refresh(),i.success({title:"Success",message:`Found ${s.totalHits} images!`,position:"topRight"})}).catch(s=>{c(l),s.message==="No images found for your search query."?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error("Error fetching images:",s)}),r.target.reset()}
//# sourceMappingURL=index.js.map
