import express, { Application, Request, Response } from "express";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  return res.send("hey it is working .....");
});

app.listen(PORT, () => console.log(`Server is running on port number ${PORT}`));
