(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();new Swiper(".hero__swiper",{pagination:{el:".hero__swiper-pagination",clickable:!0}});new Swiper(".portfolio__swiper",{pagination:{el:".slider-controls__count",type:"fraction"},navigation:{nextEl:"#slider-next",prevEl:"#slider-prev"}});const n=document.querySelector("#hamb"),a=document.querySelector("#popup"),d=document.body,u=document.querySelector(".header__list").cloneNode(1);n.addEventListener("click",f);function f(e){e.preventDefault(),a.classList.toggle("open"),n.classList.toggle("active"),d.classList.toggle("noscroll"),m()}function m(){a.appendChild(u)}const p=Array.from(u.children);p.forEach(e=>{e.addEventListener("click",b)});function b(){a.classList.remove("open"),n.classList.remove("active"),d.classList.remove("noscroll")}const l=document.querySelector(".headaer__container-big");l.onclick=()=>{l.classList.contains("headaer__container-big_show")===!1?l.classList.add("headaer__container-big_show"):l.classList.remove("headaer__container-big_show")};function L(){const e=document.querySelector(".bottom"),s=document.querySelector(".about-us__desc"),r=document.querySelector(".about-us__desc_mob"),c=document.querySelector(".about-us__container-big");e.onclick=()=>{e.classList.contains("bottom__show")===!1?(e.classList.add("bottom__show"),s.classList.add("about-us__desc_full"),c.classList.add("about-us__container-big_full"),r.classList.remove("about-us__desc_mob")):(e.classList.remove("bottom__show"),s.classList.remove("about-us__desc_full"),c.classList.remove("about-us__container-big_full"),r.classList.add("about-us__desc_mob"))}}function g(){const e=document.querySelector(".bottom__portfolio"),s=document.querySelector(".portfolio__desc"),r=document.querySelector(".portfolio__desc-2"),c=document.querySelector(".portfolio__desc-3"),o=document.querySelector(".portfolio__container-big"),t=document.querySelector(".portfolio__desc_mob"),i=document.querySelector(".portfolio__desc_mob-2"),_=document.querySelector(".portfolio__desc_mob-3");e.onclick=()=>{e.classList.contains("bottom__show")===!1?(e.classList.add("bottom__show"),s.classList.add("portfolio__desc_full"),r.classList.add("portfolio__desc_full-2"),c.classList.add("portfolio__desc_full-3"),o.classList.add("portfolio__container-big_full"),t.classList.remove("portfolio__desc_mob"),i.classList.remove("portfolio__desc_mob-2"),_.classList.remove("portfolio__desc_mob-3")):(e.classList.remove("bottom__show"),s.classList.remove("portfolio__desc_full"),r.classList.remove("portfolio__desc_full-2"),c.classList.remove("portfolio__desc_full-3"),o.classList.remove("portfolio__container-big_full"),t.classList.add("portfolio__desc_mob"),i.classList.add("portfolio__desc_mob-2"),_.classList.add("portfolio__desc_mob-3"))}}L();g();
