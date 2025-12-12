import "dotenv/config"
import express, { type Request, type Response } from "express";
import { validateShortURL } from "./urlValidator.js";

const app = express();

app.use(express.json());

app.post("/validate-url", (req: Request, res: Response) => {
  const { url } = req.body as { url: string };
  const isValid = validateShortURL(url);

  res.status(isValid ? 200 : 400).json({ valid: isValid })
})

export default app;