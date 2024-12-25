import{A as l}from"./assets/vendor-CokkFCT8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{new l(".accordion",{duration:300,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".accordion-item");o.forEach(n=>{n.querySelector(".accordion-header").addEventListener("click",()=>{o.forEach(r=>{r!==n&&r.classList.remove("open")}),n.classList.toggle("open")})});const i=document.querySelector(".accordion-item");i&&i.classList.add("open")});document.addEventListener("DOMContentLoaded",()=>{new Accordion(".accordion-container",{duration:300,showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",onOpen:i=>{const n=i.querySelector(".ac-panel"),t=i.querySelector(".icon use");n&&(n.style.maxHeight=n.scrollHeight+"px",n.style.overflow="visible"),t&&t.setAttribute("xlink:href","#icon-arrowUP")},onClose:i=>{const n=i.querySelector(".ac-panel"),t=i.querySelector(".icon use");n&&(n.style.maxHeight=null,n.style.overflow="hidden"),t&&t.setAttribute("xlink:href","#icon-arrowDOWN")}});const o=document.createElement("style");o.textContent=".ac .ac-trigger::after { display: none !important; }",document.head.appendChild(o)});const d=document.querySelector(".header_menu_img"),a=document.querySelector(".modal_window");d.addEventListener("click",()=>{a.classList.toggle("active")});const u=document.querySelector(".x_icon");u.addEventListener("click",()=>{a.classList.toggle("active")});const p=document.querySelector(".nav_link");p.addEventListener("click",()=>{document.querySelector(".menu").classList.remove("active")});const m=document.querySelector(".menu_trigger");m.addEventListener("click",function(){document.querySelector(".menu").classList.toggle("active")});document.addEventListener("DOMContentLoaded",()=>{new Swiper(".swiper-p",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next-p",prevEl:".swiper-button-prev-p"},pagination:{el:".swiper-pagination-p",clickable:!0},keyboard:{enabled:!0},mousewheel:!0,on:{init:function(){o(this)},slideChange:function(){o(this)}}});function o(i){const n=document.querySelector(".swiper-button-prev-p"),t=document.querySelector(".swiper-button-next-p");i.isBeginning?(n.setAttribute("disabled","true"),n.classList.add("disabled")):(n.removeAttribute("disabled"),n.classList.remove("disabled")),i.isEnd?(t.setAttribute("disabled","true"),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled"))}});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("reviews-list");function i(e){o.innerHTML="",e.forEach(s=>{const c=document.createElement("li");c.classList.add("swiper-slide","reviews-list-item"),c.innerHTML=`
                <img class="review-image" src="${s.avatar_url}" alt="${s.author}" width="48" height="48">
                <h3 class="reviews-names">${s.author}</h3>
                <p class="reviews-text">${s.review}</p>
            `,o.appendChild(c)}),requestAnimationFrame(n)}function n(){const e=document.querySelectorAll(".reviews-list-item");let s=0;e.forEach(c=>{c.style.height="auto",s=Math.max(s,c.offsetHeight)}),e.forEach(c=>{c.style.height=`${s}px`})}async function t(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const s=await e.json();s&&Array.isArray(s)&&s.length>0?i(s):o.innerHTML='<li style="color: red;">Not found</li>'}catch(e){o.innerHTML='<li style="color: red;">Not found</li>',alert("reviews not found"),console.error("Reviews error:",e)}}function r(){const e=new Swiper(".swiper",{speed:400,spaceBetween:16,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2,speed:400,spaceBetween:16},1440:{slidesPerView:4,speed:400,spaceBetween:16}}});e.on("slideChange",function(){const s=e.navigation.prevEl,c=e.navigation.nextEl;s.disabled=e.isBeginning,c.disabled=e.isEnd})}t().then(()=>{r()})});const f="https://portfolio-js.b.goit.study/api/requests",h=document.querySelector(".form-subscribe"),v=document.querySelector(".model_overlay"),g=document.querySelector(".info_item");h.addEventListener("submit",w);function w(o){o.preventDefault();const i=o.target.elements.email.value,n=o.target.elements.comment.value;fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,comment:n})}).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>console.log(t)).then(t=>g.insertAdjacentHTML("beforeend",y(t))).catch(t=>console.log(t.message))}function y(o){return v.classList.remove("visibility-hidden"),o.map(({title:i,message:n})=>`
        <div class="text_info">
        <p>${i}</p>
        </div>
        <div class="supporting_text">
        <p>${n}</p>
        </div>
    `).join("")}
//# sourceMappingURL=index.js.map
