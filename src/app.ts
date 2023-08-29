import express, { Request, Response, NextFunction } from "express";
require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.listen(port, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${port}
  ################################################
`);
});
