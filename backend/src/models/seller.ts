import { NextFunction } from "express";
import { model, Schema } from 'mongoose';
import { isEmail } from "validator";
import bcrypt from 'bcrypt'

const sellerSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true,
        validate : [isEmail, "Please enter a valid email"]
    },
    user_type : {
        type : String,
        required : true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
    },
    phone: {
        type: String,
        unique : true,
        required: true
    },
    businessName: {
        type: String,
        unique : true,
        required: true
    },
    businessRegistrationID: {
        type: String,
        required: true,
        unique : true
    },
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    },
    termsAccepted: Boolean
}, { timestamps: true });

sellerSchema.pre('save', async function (next) : Promise<void>  {
    try {
        this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
        next();
    } catch (error) {
        console.log(error)
    }
})

const sellerModel = model('users_sellers', sellerSchema);

export default sellerModel;