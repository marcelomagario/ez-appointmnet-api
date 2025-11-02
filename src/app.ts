import express from "express";
import { router } from "./routes";

export const app = express();

app.use(express.json());
app.use(router);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

