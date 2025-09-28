import { categoriesList, productsList, notFoundProducts, modal } from './refs';

export function renderCategoriesMarkup(arr) {
  const markup = arr
    .map(
      el => `<li class="categories__item">
   <button class="categories__btn" type="button">${el}</button>
 </li>`
    )
    .join('');
  categoriesList.innerHTML = markup;
}

export function renderProductMarkup(arr) {
  if (!arr.length) {
    notFoundProducts.classList.add('not-found--visible');
    productsList.innerHTML = '';
    return;
  } else {
    notFoundProducts.classList.remove('not-found--visible');
  }
  const markup = arr
    .map(
      el => `<li class="products__item" data-id="${el.id}">
    <img class="products__image" src="${el.images[0]}" alt="${el.title}"/>
    <p class="products__title">${el.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${el.brand}</p>
    <p class="products__category">Category: ${el.category} </p>
    <p class="products__price">Price: ${el.price} $</p>
 </li>
`
    )
    .join('');
  productsList.innerHTML = markup;
}

export function createModalMarkup(product) {
  const markup = `<img class="modal-product__img" src="${product.thumbnail}" alt="${product.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${product.title}</p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description">${product.description}</p>
        <p class="modal-product__shipping-information">Shipping:</p>
        <p class="modal-product__return-policy">Return Policy:</p>
        <p class="modal-product__price">Price: ${product.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;
  modal.innerHTML = markup;
}
