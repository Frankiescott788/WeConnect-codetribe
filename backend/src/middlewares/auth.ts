import { NextFunction, Request } from "express";
import jwt from "jsonwebtoken";
import sellerModel from "../models/seller";

async function Authenticate(
  req: any,
  res: any,
  next: NextFunction
): Promise<void> {
  try {
    const { auth_token } = req.cookies;
    if (auth_token) {
      jwt.verify(
        auth_token,
        "frankie",
        async (err: any, decoded: any): Promise<void> => {
          if (err) console.log(err);
          const current_user = await sellerModel.findOne({
            _id: decoded?.user_id,
          });
          if (!current_user) {
            res.status(404).json({ err: "User not found" });
          } else {
            req.id = current_user?._id;
            next();
          }
        }
      );
    } else {
      res.status(400).json({
        message: "unauthorised",
      });
    }
  } catch (error) {
    res.status(500).json({ err: "internal server error" });
  }
}

export default Authenticate;
