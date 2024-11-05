import { model, Schema } from "mongoose";

interface Product {
    name : string,
    description : string,
    price : string,
    quantity : string,
    category : string[],
    images : String,
    sellerId : string
}

const productSchema = new Schema<Product>({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    quantity : {
        type : String,
        required : true
    },
    category : {
        type : [String],
        required : true
    },
    images : {
        type : [String],
        required : true
    },
    sellerId : {
        type : String,
        required : true
    }
})

const Productmodel = model('products', productSchema );

export default Productmodel