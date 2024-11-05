import { Schema, model } from "mongoose";

interface ICart {
    userId: string;
    products: [string];
}

const cartSchema = new Schema<ICart>({
    userId: {
        type: String,
        required: true
    },
    products: {
        type: [String],
        required: true
    }
});

export default model("client_cart", cartSchema);