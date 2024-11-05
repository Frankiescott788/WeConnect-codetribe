import { Router } from "express";
import { seller_signup, seller_login, create_client, client_login, get_current_seller } from "../controllers/users";
import multer from "multer";
import { create_product, delete_product, get_product, get_products, seller_products, update_product } from "../controllers/products";
import Authenticate from "../middlewares/auth";


const routes = Router();
const storage = multer.memoryStorage();
const upload = multer({storage});

routes.post('/api/seller/newproduct', Authenticate , upload.single('images'), create_product);
routes.get('/api/products', Authenticate ,get_products);
routes.get('/api/:businessid/products',Authenticate ,seller_products);
routes.get('/api/product/:id', Authenticate ,get_product);
routes.patch('/api/product/:id',Authenticate ,update_product);
routes.delete('/api/product/:id',Authenticate ,delete_product);



routes.post("/api/seller/signup", seller_signup);
routes.post('/api/seller/signin', seller_login);
routes.get('/api/seller/current', Authenticate,get_current_seller);

routes.post('/api/client/signup', create_client);
routes.post('/api/client/signin', client_login);

export default routes
