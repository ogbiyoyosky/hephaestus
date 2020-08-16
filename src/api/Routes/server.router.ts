import { Router, Request, Response, NextFunction } from "express";
import ServerController from "../Controllers/ServerPlanning/planning.controller";
import validate from "../Helpers/validator";

export class serverRouter {
  public router: Router;

  /*--------  Constructor  --------*/

  constructor() {
    //
    // Set router
    this.router = Router();
    this.init();
  }

  /*--------  Methods  --------*/

  /**
   *
   * Init all routes in this router
   * @public
   */

  async init() {
    this.router.post(
      "/server/manage-vm",
      validate.validateBody(validate.schemas.calucateVm),
      ServerController.calculateServerCapacity
    );

    this.router.get("/", (req: Request, res: Response) => {
      return res.send({
        message: "Welcome to the truim network assessment",
      });
    });
  }
}

export default new serverRouter().router;
