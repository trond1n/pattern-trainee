// Импорт классов
import { InventoryManager } from './patterns/InventoryManager.js'; 
import { ProductFactory } from './patterns/ProductFactory.js'; 

// Инициализируем InventoryManager и ProductFactory
const inventory = InventoryManager.getInstance();
const productFactory = new ProductFactory();

// Получаем элементы формы и списка для InventoryManager
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const showProductsButton = document.getElementById('show-products');

// Получаем элементы формы и списка для ProductFactory
const fabricForm = document.getElementById('fabric-form');
const fabricList = document.getElementById('fabric-list');

// Добавление продукта в инвентарь (InventoryManager)
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

// Отображение продуктов из инвентаря
showProductsButton.addEventListener('click', () => {
  productList.innerHTML = ''; // Очищаем список

  inventory.products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.productName}: ${product.quantity}`;
    productList.appendChild(listItem);
  });
});

// Добавление продукта через фабрику (ProductFactory)
fabricForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const productType = document.getElementById('fabric-type').value;
  const productName = document.getElementById('fabric-name').value;
  const productPrice = parseFloat(document.getElementById('fabric-price').value);

  // Создаём продукт с помощью фабрики
  const product = productFactory.create(productType, productName, productPrice);

  // Добавляем продукт в список
  const productItem = document.createElement('li');
  productItem.textContent = product.getDescription();
  fabricList.appendChild(productItem);

  // Очищаем форму
  fabricForm.reset();
});
