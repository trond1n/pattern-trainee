// Импорт класса InventoryManager
import { InventoryManager } from './patterns/InventoryManager.js'; 

// Получаем элементы DOM
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const showProductsButton = document.getElementById('show-products');

// Инициализируем InventoryManager
const inventory = InventoryManager.getInstance();

// Добавляем продукт
productForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productQuantity = parseInt(document.getElementById('product-quantity').value);

  if (productName && productQuantity > 0) {
    inventory.addProduct(productName, productQuantity);
    alert(`${productName} added with quantity ${productQuantity}`);
    productForm.reset();
  }
});

// Отображаем список продуктов
showProductsButton.addEventListener('click', () => {
  productList.innerHTML = ''; // Очищаем список

  inventory.products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.productName}: ${product.quantity}`;
    productList.appendChild(listItem);
  });
});
