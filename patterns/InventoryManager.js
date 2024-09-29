export class InventoryManager {
    static _instance;
  
    constructor() {
      if (InventoryManager._instance) {
        throw new Error("Use InventoryManager.getInstance() to get the single instance of this class.");
      }
      this.products = [];
    }
  
    // Статический метод для получения единственного экземпляра класса
    static getInstance() {
      if (!InventoryManager._instance) {
        InventoryManager._instance = new InventoryManager();
      }
      return InventoryManager._instance;
    }
  
    // Методы управления продуктами
    addProduct(productName, quantity) {
      this.products.push({ productName, quantity });
    }
  
    getProductCount(productName) {
      const product = this.products.find(p => p.productName === productName);
      return product ? product.quantity : 0;
    }
  
    removeProduct(productName, quantity) {
      const product = this.products.find(p => p.productName === productName);
      if (product) {
        product.quantity = Math.max(0, product.quantity - quantity);
      }
    }
  }
  