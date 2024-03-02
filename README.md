# TypeScript, Node.js, Express, MongoDB Project Structure

## Installation

`npm install`

`yarn install`

`pnpm install`

## If you want to build from scratch then follow the below steps

Step 1: Create project folder

Like: type-express

Step 2: Initialize a new Node.js Project

    run your terminal

`npm init`

Step 3: Install typescript as a dev dependency

Run the following command to install typescript as a development dependency in your project.
`npm i -D typescript`

Step 4: Create dist folder and index.ts file in project root

/dist
/index.ts

Step 5: Add a tsconfig.json file

Run the command for create tsconfig.json file in project root

`npx tsc --init`

Step 6: Get the tsconfig.json file ready

Open the tsconfig.json file. We’ll uncomment the file 2 line

`"rootDir": "./"`
`"outDir": "./dist"`

Step 7: Start ts compiler

`npx tsc --watch`

Step 8: install express and type declaration file for express

`npm i express`
`npm i -D @types/express`

Step 9: Create an express app

Add the following code to the index.ts file.

```python
import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
const port = process.env.PORT || 3333;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

Step 10: Now install nodemon and concurrently

`npm i -g nodemon`
`npm i concurrently -D`

Update in package.json file

```python
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
