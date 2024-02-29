import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});
app.get("/api", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express API!");
});

app.get("/dev", (req: Request, res: Response) => {
  res.send("Hello, Dev");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
