import { Model, Schema, model } from "mongoose";
import { IUser } from "../interface/userInterface";

const userSchema = new Schema<IUser, Model<IUser>>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    ip_address: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = model("User", userSchema);

export { UserModel };
