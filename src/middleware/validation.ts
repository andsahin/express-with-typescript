import { Request, Response } from "express";
const { Validator } = require("node-input-validator");
function validate(rules: any) {
  return async (req: Request, res: Response, next: any) => {
    const v = new Validator(req.body, rules);
    v.check().then((matched: any) => {
      if (!matched) {
        return res.status(500).json({ status: "error", message: v.errors });
      }
      next();
    });
  };
}
export { validate };
