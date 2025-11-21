"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
const taxCalculator_1 = require("../utils/taxCalculator");
class Product {
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        return ` ${this.title} Cost: $${this.price.toFixed(2)}, Description: ${this.description}, Category: ${this.category}`;
    }
    getPriceWithDiscount() {
        const discountAmmount = (0, discountCalculator_1.calculateDiscount)(this.discountPercentage)(this.price);
        const priceWithDiscount = this.price - parseInt(discountAmmount);
        const fullPriceWithTax = (0, taxCalculator_1.calculateTax)(parseInt(discountAmmount), this.category === "groceries" ? 0.03 : 0.0475);
        return `Ammount Discounted: $${discountAmmount} and the Full Price is $${fullPriceWithTax.toFixed(2)}`;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map