"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./models/product");
const apiService_1 = require("./services/apiService");
async function main() {
    try {
        const data = await (0, apiService_1.fetchData)('https://dummyjson.com/products/2');
        const product = new product_1.Product(data.id, data.title, data.description, data.category, data.price, data.discountPercentage);
        console.log("product Loaded:", product.displayDetails(), product.getPriceWithDiscount());
        console.log(product);
    }
    catch (error) {
        console.error("Error fetching or processing product:", error);
    }
}
main();
//# sourceMappingURL=main.js.map