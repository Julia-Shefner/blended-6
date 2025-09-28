import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-CWxt7QI6.js";c.defaults.baseURL="https://dummyjson.com";async function p(){try{return(await c.get("/products/category-list")).data}catch(t){console.log(t)}}async function i(t=1){try{return(await c(`/products?limit=12&skip=${(t-1)*12}`)).data.products}catch(o){console.log(o)}}async function m(t="smartphones"){try{return(await c(`/products/category/${t}`)).data.products}catch(o){console.log(o)}}async function _(t=1){try{const o=await c(`/products/${t}`);return console.log(o.data),o.data}catch(o){console.log(o)}}const d=document.querySelector(".categories"),a=document.querySelector(".products"),n=document.querySelector(".not-found"),g=document.querySelector(".modal-product"),y=document.querySelector(".modal");function b(t){const o=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");d.innerHTML=o}function l(t){if(t.length)n.classList.remove("not-found--visible");else{n.classList.add("not-found--visible"),a.innerHTML="";return}const o=t.map(s=>`<li class="products__item" data-id="${s.id}">
    <img class="products__image" src="${s.images[0]}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${s.brand}</p>
    <p class="products__category">Category: ${s.category} </p>
    <p class="products__price">Price: ${s.price} $</p>
 </li>
`).join("");a.innerHTML=o}function f(t){const o=`<img class="modal-product__img" src="${t.thumbnail}" alt="${t.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t.title}</p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description">${t.description}</p>
        <p class="modal-product__shipping-information">Shipping:</p>
        <p class="modal-product__return-policy">Return Policy:</p>
        <p class="modal-product__price">Price: ${t.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;g.innerHTML=o}async function $(){try{const o=["All",...await p()];b(o)}catch(t){console.log(t)}}async function h(){try{const t=await i();l(t)}catch(t){console.log(t)}}$();h();d.addEventListener("click",L);async function L(t){const o=t.target.closest(".categories__btn");if(!o)return;document.querySelectorAll(".categories__btn").forEach(u=>{u.classList.remove("categories__btn--active")}),o.classList.add("categories__btn--active");const e=o.textContent;let r=[];e==="All"?r=await i():r=await m(e),l(r)}a.addEventListener("click",k);async function k(t){const o=t.target.closest(".products__item");if(!o)return;const s=o.dataset.id;console.log(s);const e=await _(s);f(e),y.classList.add("modal--is-open")}
//# sourceMappingURL=index.js.map
