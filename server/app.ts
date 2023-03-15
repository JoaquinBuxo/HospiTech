import express, { Express } from "express";
import cors from "cors";
import router from "./router/router";

const app: Express = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(router);

export default app;
