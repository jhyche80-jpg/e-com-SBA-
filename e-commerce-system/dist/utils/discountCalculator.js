"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(dis) {
    return function (price) {
        let result = price * (dis);
        return result.toFixed(2);
    };
}
//# sourceMappingURL=discountCalculator.js.map