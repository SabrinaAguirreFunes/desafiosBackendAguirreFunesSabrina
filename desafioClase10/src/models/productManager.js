//Importación de dependencias
import { promises as fs } from "fs";

export class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  async addProduct(product) {
    try {
      this.products = JSON.parse(await fs.readFile(this.path, "utf-8"));

      let codeCheck = this.products.find((each) => each.code === product.code);

      if (codeCheck) {
        console.error("Already existing product, please enter a new product.");
      } else {
        this.products.push(product);
        await fs.writeFile(this.path, JSON.stringify(this.products));
        console.log("Product added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts() {
    try {
      this.products = JSON.parse(await fs.readFile(this.path, "utf-8"));
      console.log(this.products);
      return this.products;
    } catch (error) {
      console.error(error);
    }
  }

  async getProductsById(idQuest) {
    try {
      this.products = JSON.parse(await fs.readFile(this.path, "utf-8"));
      let productQuest = this.products.find((each) => each.id === idQuest);
      if (productQuest) {
        console.log(productQuest);
        return productQuest;
      }
      console.error("Product not found");
      return null;
    } catch (error) {
      console.error(error);
    }
  }

  async updateProduct(idQuest, data) {
    try {
      this.products = JSON.parse(await fs.readFile(this.path, "utf-8"));

      let productIndex = this.products.findIndex((each) => each.id === idQuest);

      if (productIndex != -1) {
        this.products[productIndex].title = data.title;
        this.products[productIndex].description = data.description;
        this.products[productIndex].code = data.code;
        this.products[productIndex].price = data.price;
        this.products[productIndex].status = data.status;
        this.products[productIndex].stock = data.stock;
        this.products[productIndex].category = data.category;
        this.products[productIndex].thumbnail = data.thumbnail;
        console.log(this.products[productIndex]);
        await fs.writeFile(this.path, JSON.stringify(this.products));
      } else {
        console.error("Product not found");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deleteProduct(idQuest) {
    try {
      this.products = JSON.parse(await fs.readFile(this.path, "utf-8"));
      let productToDelete = this.products.find((each) => each.id === idQuest);
      if (productToDelete) {
        await fs.writeFile(
          this.path,
          JSON.stringify(this.products.filter((each) => each.id != idQuest))
        );
        console.log("Product removed successfully");
      } else {
        console.error("Error deleting product");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export class Product {
  constructor(
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnail
  ) {
    this.id = Product.createIdIncremental();
    this.title = title;
    this.description = description;
    this.code = code;
    this.price = price;
    this.status = status;
    this.stock = stock;
    this.category = category;
    this.thumbnail = thumbnail;
  }

  static async createIdIncremental() {
    try {
      const products = JSON.parse(
        await fs.readFile("./data/products.json", "utf-8")
      );
      let idIncremetal = 1;
      const maxIndex = products.length - 1;
      console.log(maxIndex);

      if (maxIndex != -1) {
        idIncremetal = products[maxIndex].id + 1;
      } else {
        idIncremetal = 1;
      }
      return idIncremetal;
    } catch (error) {
      console.error(error);
    }
  }
}
