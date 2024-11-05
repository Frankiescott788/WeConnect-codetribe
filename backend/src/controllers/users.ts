import { Request } from "express";
import sellerModel from "../models/seller";
import Client from "../models/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { v4 } from "uuid";

interface SellerRegisterBody {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  user_type: string;
  phone: string;
  businessName: string;
  businessRegistrationID: string;
  address: string,
  termsAccepted: boolean;
}

interface ClientRegisterBody {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  user_type: string;
}

const seller_signup = async (req: Request, res: any): Promise<void> => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      user_type,
      phone,
      businessName,
      businessRegistrationID,
      address,
      termsAccepted,
    }: SellerRegisterBody = req.body;

    const newSeller = await sellerModel.create({
      firstname,
      lastname,
      email,
      password,
      user_type : "seller",
      phone,
      businessName,
      businessRegistrationID : v4(),
      address ,
      termsAccepted : false,
    });

    const token = jwt.sign({ user_id: newSeller._id }, "frankie", {
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
  } catch (error) {
    res.status(400).json(error);
  }
};

const seller_login = async (req: Request, res: any): Promise<void> => {
  try {
    const { email, password } = req.body;

    const find_user = await sellerModel.findOne({ email });

    if (find_user) {
      const verify = await bcrypt.compare(password, find_user?.password);
      if (verify) {
        const token = jwt.sign({ user_id: find_user?._id }, "frankie", {
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
      } else {
        return res.status(400).json({
          message: "wrong credentials",
        });
      }
    } else {
      return res.status(404).json({
        message: "no such email in our system",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const create_client = async (req: Request, res: any): Promise<void> => {
  try {
    const { firstname, lastname, email, password, phone }: ClientRegisterBody =
      req.body;

    const newClient = await Client.create({
      firstname,
      lastname,
      email,
      password,
      phone,
      user_type: "client",
    });
    const token = jwt.sign({ id: newClient?._id }, "frankie", {
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
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const client_login = async (req: Request, res: any): Promise<void> => {
  try {
    const { email, password } = req.body;
    const find_user = await Client.findOne({ email });
    if (find_user) {
      const verify = await bcrypt.compare(password, find_user?.password);
      if (verify) {
        const token = jwt.sign({ id: find_user?._id }, "frankie", {
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
      } else {
        res.status(400).json({
          message: "wrong password",
        });
      }
    } else {
      res.status(404).json({
        message: "no such email in our system",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const get_current_seller = async (req : any, res : any) : Promise<void> => {
  try {
    const { id } = req;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({err : "Invalid object id"})
    } 

    const current_user = await sellerModel.findById({ _id : id }).select('-password')

    if(!current_user) {
      return res.status(404).json({err : "No such user in our system"})
    } else {
      return res.status(200).json({
        message : "user authenticated",
        data : current_user
      })
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}

export { seller_signup, seller_login, create_client, client_login, get_current_seller };
