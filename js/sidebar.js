const initSidebar=()=>{const e=document.querySelector(".header__block"),t=document.querySelector(".sidebar__toggle"),o=document.querySelector(".sidebar__wrapper");t.addEventListener("click",(()=>{o.classList.toggle("sidebar--opened"),t.classList.add("sidebar__toggle--show"),e.classList.contains("header__block--visible")&&t.classList.remove("sidebar__toggle--show"),window.innerWidth<47*parseFloat(getComputedStyle(document.documentElement).fontSize)&&(o.classList.contains("sidebar--opened")?document.body.style.overflow="hidden":document.body.style.overflow="auto")}))};export{initSidebar};