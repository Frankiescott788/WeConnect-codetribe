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
exports.get_current_seller = exports.client_login = exports.create_client = exports.seller_login = exports.seller_signup = void 0;
const seller_1 = __importDefault(require("../models/seller"));
const client_1 = __importDefault(require("../models/client"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const seller_signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, password, user_type, phone, businessName, businessRegistrationID, address, termsAccepted, } = req.body;
        const newSeller = yield seller_1.default.create({
            firstname,
            lastname,
            email,
            password,
            user_type: "seller",
            phone,
            businessName: "",
            businessRegistrationID: "",
            address: "",
            termsAccepted: false,
        });
        const token = jsonwebtoken_1.default.sign({ user_id: newSeller._id }, "frankie", {
            expiresIn: "7d",
        });
        res.cookie("auth_token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        });
        res.status(201).json({
            message: "Seller created successfully",
            data: newSeller,
        });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.seller_signup = seller_signup;
const seller_login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const find_user = yield seller_1.default.findOne({ email });
        if (find_user) {
            const verify = yield bcrypt_1.default.compare(password, find_user === null || find_user === void 0 ? void 0 : find_user.password);
            if (verify) {
                const token = jsonwebtoken_1.default.sign({ id: find_user === null || find_user === void 0 ? void 0 : find_user._id }, "frankie", {
                    expiresIn: "7d",
                });
                res.cookie("auth_token", token, {
                    maxAge: 7 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                    secure: true,
                });
                res.status(200).json({
                    message: "logged in successfully",
                    data: find_user,
                });
            }
            else {
                res.status(400).json({
                    message: "wrong credentials",
                });
            }
        }
        else {
            res.status(404).json({
                message: "no such email in our system",
            });
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.seller_login = seller_login;
const create_client = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, password, phone } = req.body;
        const newClient = yield client_1.default.create({
            firstname,
            lastname,
            email,
            password,
            phone,
            user_type: "client",
        });
        const token = jsonwebtoken_1.default.sign({ id: newClient === null || newClient === void 0 ? void 0 : newClient._id }, "frankie", {
            expiresIn: "7d",
        });
        res.cookie("auth_token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        });
        res.status(201).json({
            message: "Client created successfully",
            data: newClient,
        });
    }
    catch (error) {
        res.status(500).json({ err: error });
    }
});
exports.create_client = create_client;
const client_login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const find_user = yield client_1.default.findOne({ email });
        if (find_user) {
            const verify = yield bcrypt_1.default.compare(password, find_user === null || find_user === void 0 ? void 0 : find_user.password);
            if (verify) {
                const token = jsonwebtoken_1.default.sign({ id: find_user === null || find_user === void 0 ? void 0 : find_user._id }, "frankie", {
                    expiresIn: "7d",
                });
                res.cookie("auth_token", token, {
                    maxAge: 7 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                    secure: true,
                });
                res.status(200).json({
                    message: "logged in successfully",
                    data: find_user,
                });
            }
            else {
                res.status(400).json({
                    message: "wrong password",
                });
            }
        }
        else {
            res.status(404).json({
                message: "no such email in our system",
            });
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.client_login = client_login;
const get_current_seller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(400).json({ err: "Invalid object id" });
        }
        const current_user = yield seller_1.default.findOne({ _id: id }).select('-password');
        if (!current_user) {
            res.status(404).json({ err: "No such user in our system" });
        }
        else {
            res.status(200).json({
                message: "user authenticated",
                data: current_user
            });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.get_current_seller = get_current_seller;
