// import dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as cors from "cors";
import * as compression from "compression";
import * as helmet from "helmet";

var multer = require("multer");
var upload = multer();

import Routes from "./routes";

class Express {
  public app: express.Express;
  constructor() {
    //initiate app
    this.app = express();
    //initiate env
    this.setupEnv();
    //initiate passport

    //setup middlewares
    this.setupMiddleware();
    //routes for the app
    this.setupRoutes();
  }

  private setupEnv() {
    // Set env from file
    require("dotenv").config();
  }

  private setupRoutes() {
    new Routes(this.app);
  }

  private setupMiddleware() {
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(upload.none());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
  }
}

export default new Express().app;
