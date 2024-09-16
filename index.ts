import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./main";
import { dbConfig } from "./utils/dbConfig";
import session from "express-session";
import cookieParser from "cookie-parser";
const app: Application = express();
const port: number | any = process.env.PORT!;

app.use(cors({ origin: ["*"] }));
app.use(express.json());
app.use(cookieParser("codifyPlatform"));

app.set("trust proxy", 1);
app.use(
  session({
    secret: "codifyPlatform",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600 },
  })
);

mainApp(app);

app.listen(port, () => {
  console.clear();
  console.log("server running");
  dbConfig();
});
