//Логіка сторінки Home
import {
  getProductCategories,
  getProducts,
  getProductsByCategory,
  getProductById,
} from './js/products-api';
import {
  renderCategoriesMarkup,
  renderProductMarkup,
  createModalMarkup,
} from './js/render-function';
import { categoriesList, productsList, modalWindow } from './js/refs';

async function renderCategories() {
  try {
    const categories = await getProductCategories();
    const allCategories = ['All', ...categories];
    renderCategoriesMarkup(allCategories);
  } catch (error) {
    console.log(error);
  }
}

async function renderProducts() {
  try {
    const products = await getProducts();
    renderProductMarkup(products);
  } catch (error) {
    console.log(error);
  }
}

renderCategories();
renderProducts();

categoriesList.addEventListener('click', handlerClick);

async function handlerClick(event) {
  const clickedBtn = event.target.closest('.categories__btn');
  if (!clickedBtn) {
    return;
  }
  const buttons = document.querySelectorAll('.categories__btn');
  buttons.forEach(el => {
    el.classList.remove('categories__btn--active');
  });
  clickedBtn.classList.add('categories__btn--active');
  const categoryName = clickedBtn.textContent;
  let products = [];
  if (categoryName === 'All') {
    products = await getProducts();
  } else {
    products = await getProductsByCategory(categoryName);
  }
  renderProductMarkup(products);
}
productsList.addEventListener('click', handlerProductListClick);

async function handlerProductListClick(event) {
  const productCard = event.target.closest('.products__item');
  if (!productCard) {
    return;
  }
  const productId = productCard.dataset.id;
  console.log(productId);
  const product = await getProductById(productId);
  createModalMarkup(product);
  modalWindow.classList.add('modal--is-open');
}
