import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));

// mongoose.connect("mongodb+srv://frankie:telefunkencode864@cluster0.ejn8lpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/weconnect");

const db = mongoose.connection;

db.on("error", () : void => console.log("Error connecting to database"));
db.once("open", () : void => {
    app.listen(8080, () : void => {
        console.log('server connected and running on port 8080')
    });
    app.use(routes);
})
