import { Request, response } from "express";
import Productmodel from "../models/products";
import { storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import sellerModel from "../models/seller";
import { v4 } from "uuid";
import { supabase } from "../supabase/config";
import mongoose from "mongoose";

interface Product {
  name: string;
  description: string;
  price: string;
  quantity: number;
  category: string[];
  sellerId: string;
  images: string;
}

const create_product = async (req: any, res: any): Promise<void> => {
  try {
    const { name, description, price, quantity, category, sellerId }: Product =
      req.body;
    const photos = req.file;

    const storageRef = ref(storage, `images/product_${v4()}`);

    await uploadBytes(storageRef, photos.buffer);

    const urlData = await getDownloadURL(storageRef);

    const add_products = await Productmodel.create({
      name,
      description,
      price,
      quantity,
      category,
      sellerId,
      images: urlData,
    });

    res.status(201).json({
      message: "Product added successfully",
      data: add_products,
    });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const get_products = async (req: any, res: any): Promise<void> => {
  try {
    const all_products = await Productmodel.find({});

    if (all_products.length === 0) {
      res.status(404).json({ err: "No products found" });
    } else {
      res.status(200).json({
        message: "Products retrieved successfully",
        data : all_products
      });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const seller_products = async (req: Request, res: any): Promise<void> => {
  try {
    const { businessid } = req.params;

    const find_products = await Productmodel.find({ sellerId: businessid });
    if (find_products.length === 0) {
      return res.status(404).json({ err: "No products found" });
    } else {
      return res.status(200).json({
        message: "Products retrieved successfully",
        data: find_products,
      });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const get_product = async (req: Request, res: any): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(404).json({ err: "Product not found" });
    }
    const find_product = await Productmodel.findById(id);
    if (find_product) {
      res.status(200).json({
        message: "Product retrieved successfully",
        data: find_product,
      });
    } else {
      res.status(404).json({ err: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const update_product = async (req: Request, res: any): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ err: "Product not found" });
    }

    const find_product_and_update = await Productmodel.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Product updated successfully",
      data: find_product_and_update,
    })
  } catch (error) {
    res.status(500).json({ err: "internal server error" });
  }
};

const delete_product = async (req: Request, res: any): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(404).json({ err: "Product not found" });
    }
    await Productmodel.findOneAndDelete({ _id: id });

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ err: "internal server error" });
  }
};

export {
  create_product,
  get_products,
  seller_products,
  get_product,
  update_product,
  delete_product,
};
