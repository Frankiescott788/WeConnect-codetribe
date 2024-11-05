"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true
}));
mongoose_1.default.connect("mongodb+srv://frankie:telefunkencode864@cluster0.ejn8lpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/weconnect");
const db = mongoose_1.default.connection;
db.on("error", () => console.log("Error connecting to database"));
db.once("open", () => {
    app.listen(8080, () => {
        console.log('server connected and running on port 8080');
    });
    app.use(routes_1.default);
});
