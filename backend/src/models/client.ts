import { model, Schema } from "mongoose";
import bcrypt, { genSalt } from "bcrypt";
import { isEmail } from "validator";

interface User {
    firstname : string,
    lastname : string,
    email : string,
    password : string,
    phone : string,
    user_type : string
}

const userSchema = new Schema<User>({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : [isEmail, "Please enter a valid email"]
    },
    password : {
        type : String,
        required : true,
        minlength : [6, "Password must be at least 6 characters long"]
    },
    phone : {
        type : String,
        required : true,
        unique : true
    },
    user_type : {
        type : String,
        required : true
    }
}, { timestamps : true });

userSchema.pre("save", async function(next) {
    try {
        this.password = await bcrypt.hash(this.password, await genSalt(10));
        next();
    } catch (error) {
        console.log(error);
    }
})

const ClientModel = model("users_clients", userSchema);

export default ClientModel