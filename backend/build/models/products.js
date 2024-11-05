"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    sellerId: {
        type: String,
        required: true
    }
});
const Productmodel = (0, mongoose_1.model)('products', productSchema);
exports.default = Productmodel;
