"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_product = exports.update_product = exports.get_product = exports.seller_products = exports.get_products = exports.create_product = void 0;
const products_1 = __importDefault(require("../models/products"));
const config_1 = require("../firebase/config");
const storage_1 = require("firebase/storage");
const uuid_1 = require("uuid");
const mongoose_1 = __importDefault(require("mongoose"));
const create_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, quantity, category, sellerId } = req.body;
        const photos = req.file;
        const { id } = req;
        const storageRef = (0, storage_1.ref)(config_1.storage, `images/product_${(0, uuid_1.v4)()}`);
        yield (0, storage_1.uploadBytes)(storageRef, photos.buffer);
        const urlData = yield (0, storage_1.getDownloadURL)(storageRef);
        const add_products = yield products_1.default.create({
            name,
            description,
            price,
            quantity,
            category,
            sellerId: id,
            images: urlData,
        });
        res.status(201).json({
            message: "Product added successfully",
            data: add_products,
        });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.create_product = create_product;
const get_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all_products = yield products_1.default.find({});
        if (all_products.length === 0) {
            res.status(404).json({ err: "No products found" });
        }
        else {
            res.status(200).json({
                message: "Products retrieved successfully",
                data: all_products
            });
        }
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.get_products = get_products;
const seller_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { businessid } = req.params;
        const find_products = yield products_1.default.find({ sellerId: businessid });
        if (find_products.length === 0) {
            return res.status(404).json({ err: "No products found" });
        }
        else {
            return res.status(200).json({
                message: "Products retrieved successfully",
                data: find_products,
            });
        }
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.seller_products = seller_products;
const get_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ err: "Product not found" });
        }
        const find_product = yield products_1.default.findById(id);
        if (find_product) {
            return res.status(200).json({
                message: "Product retrieved successfully",
                data: find_product,
            });
        }
        else {
            return res.status(404).json({ err: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.get_product = get_product;
const update_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(404).json({ err: "Product not found" });
        }
        const find_product_and_update = yield products_1.default.findByIdAndUpdate(id, Object.assign({}, req.body), {
            new: true,
        });
        res.status(200).json({
            message: "Product updated successfully",
            data: find_product_and_update,
        });
    }
    catch (error) {
        res.status(500).json({ err: "internal server error" });
    }
});
exports.update_product = update_product;
const delete_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).json({ err: "Product not found" });
        }
        yield products_1.default.findOneAndDelete({ _id: id });
        res.status(200).json({
            message: "Product deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({ err: "internal server error" });
    }
});
exports.delete_product = delete_product;
