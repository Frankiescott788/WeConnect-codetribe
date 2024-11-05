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

    if (!auth_token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(auth_token, "frankie", (err: any, decoded: any) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Failed to authenticate token" });
      }
      req.id = decoded.user_id;
      next();
    });
  } catch (error) {
    res.status(500).json({ err: "internal server error" });
  }
}

export default Authenticate;
