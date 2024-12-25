import"./assets/vendor-B0slJTaf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c="https://portfolio-js.b.goit.study/api/requests",l=document.querySelector(".form-subscribe"),u=document.querySelector(".model_overlay"),a=document.querySelector(".info_item");l.addEventListener("submit",d);function d(n){n.preventDefault();const r=n.target.elements.email.value,i=n.target.elements.comment.value;fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,comment:i})}).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>console.log(t)).then(t=>a.insertAdjacentHTML("beforeend",f(t))).catch(t=>console.log(t.message))}function f(n){return u.classList.remove("visibility-hidden"),n.map(({title:r,message:i})=>`
        <div class="text_info">
        <p>${r}</p>
        </div>
        <div class="supporting_text">
        <p>${i}</p>
        </div>
    `).join("")}
//# sourceMappingURL=index.js.map
