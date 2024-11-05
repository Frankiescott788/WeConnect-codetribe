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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const seller_1 = __importDefault(require("../models/seller"));
function Authenticate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { auth_token } = req.cookies;
            if (auth_token) {
                jsonwebtoken_1.default.verify(auth_token, "frankie", (err, decoded) => __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        console.log(err);
                    const current_user = yield seller_1.default.findOne({
                        _id: decoded === null || decoded === void 0 ? void 0 : decoded.user_id,
                    });
                    if (!current_user) {
                        res.status(404).json({ err: "User not found" });
                    }
                    else {
                        req.id = current_user === null || current_user === void 0 ? void 0 : current_user._id;
                        next();
                    }
                }));
            }
            else {
                res.status(400).json({
                    message: "unauthorised",
                });
            }
        }
        catch (error) {
            res.status(500).json({ err: "internal server error" });
        }
    });
}
exports.default = Authenticate;
