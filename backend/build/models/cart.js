"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    products: {
        type: [String],
        required: true
    }
});
exports.default = (0, mongoose_1.model)("client_cart", cartSchema);
