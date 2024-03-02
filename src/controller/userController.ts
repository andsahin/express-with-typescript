import bcrypt from "bcryptjs";
import { Request, Response } from "express";
// import string from "string-sanitizer";
import { UserModel } from "../model/userModel";

export const signUpValidateRules = {
  firstName: "required",
  lastName: "required",
  email: "required|email",
  password: "required",
  phone: "required",
};

export const userSignUp = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    const encryptedPassword = await bcrypt.hashSync(password, 10);
    const insertVal = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      ip_address: req.socket.remoteAddress,
      password: encryptedPassword,
    };

    //save user
    const newUser = await new UserModel(insertVal).save();

    res.status(200).json({
      status: "success",
      message: "Registration Successfully",
      data: newUser,
    });
  } catch (err: any) {
    if (err.code === 11000) {
      res.status(500).json({
        status: "error",
        message: `Duplicate Data ${
          err.keyValue[`${Object.keys(err.keyValue)}`]
        }`,
      });
    } else {
      res.status(500).json({
        status: "error",
        message: err?.message,
      });
    }
  }
};
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    //find all user's
    const allUsers = await UserModel.find().select("-password");

    res.status(200).json({
      status: "success",
      message: "Find Successfully",
      data: "allUsers",
    });
  } catch (err: any) {
    res.status(500).json({
      status: "error",
      message: err?.message,
    });
  }
};
