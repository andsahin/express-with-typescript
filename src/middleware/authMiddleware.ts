import { Request, Response } from "express";

export const check = async (req: Request, res: Response, next: any) => {
  //write your conditions here
  next();
};
