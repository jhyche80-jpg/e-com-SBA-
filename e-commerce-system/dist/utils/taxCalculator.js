"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(priceAfterDIs, tax) {
    let result = priceAfterDIs + (priceAfterDIs * tax);
    return result;
}
//# sourceMappingURL=taxCalculator.js.map