import express, { Request, Response, Router } from "express";
import * as user from "../controller/userController";
import { check } from "../middleware/authMiddleware";
import { validate } from "../middleware/validation";

const userRouter: Router = express.Router();

userRouter.use(function (req: Request, res: Response, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

userRouter.get("/health", (req: Request, res: Response) => {
  res.send("Hello, Health is ok !");
});
userRouter.post(
  "/sign-up",
  [check, validate(user.signUpValidateRules)],
  user.userSignUp
);
userRouter.get("/get-all", [check], user.getAllUsers);

export { userRouter };
