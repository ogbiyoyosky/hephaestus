import { Request, Response, NextFunction, response } from "express";
import ServerManager from "../../Helpers/calculateServerCapacity";

export default class UserController {
  /**
   * Calculate a server holding capacity when pass several vms
   *
   * @param {Object} req: url params
   * @param {Function} res: Express.js response callback
   * @param {Function} next: Express.js middleware callback
   * @public
   *
   * @returns {Object}
   */
  public static async calculateServerCapacity(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { serverType, virtualMachines } = req.body;
      const vmManager = new ServerManager(serverType, virtualMachines);
      const result = vmManager.calculate();

      return res.status(200).send({
        message:
          "Successfully fetched the holding capacity for the server type",
        result: {
          value: result,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
