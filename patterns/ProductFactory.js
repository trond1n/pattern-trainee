class Tea {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getDescription() {
      return `This tea is called ${this.name} and costs ${this.price} per 100gr.`;
    }
  }
  
  class Coffee {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getDescription() {
      return `This sort of coffee is called ${this.name} and costs ${this.price} per unit.`;
    }
  }
  
  // Фабрика для создания продуктов
  export class ProductFactory {
    create(type, name, price) {
      if (type === 'tea') {
        return new Tea(name, price);
      } else if (type === 'coffee') {
        return new Coffee(name, price);
      } else {
        throw new Error("Unknown product type");
      }
    }
  }
  