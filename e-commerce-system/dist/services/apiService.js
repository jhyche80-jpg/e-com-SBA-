"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
const ErrorHandler_1 = require("../utils/ErrorHandler");
const ErrorHandler_2 = require("../utils/ErrorHandler");
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched data:", data);
    }
    catch (error) {
        if (error instanceof ErrorHandler_2.NetworkError) {
            console.error("Network error:", error.message);
        }
        else if (error instanceof ErrorHandler_1.DataError) {
            console.error("Data Error", error.message);
        }
        else if (error instanceof Error) {
            console.error("Unknown error:", error.message);
        }
    }
}
//# sourceMappingURL=apiService.js.map