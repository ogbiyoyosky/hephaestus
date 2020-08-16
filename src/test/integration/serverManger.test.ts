import { expect } from "chai";
import * as httpStatus from "http-status";
import app from "../../config/express";
import "mocha";
const request = require("supertest");
require("ts-mocha");

describe("SERVER MANAGER", () => {
  const data = {
    serverType: { CPU: 2, RAM: 32, HDD: 100 },
    virtualMachines: [
      { CPU: 1, RAM: 16, HDD: 10 },
      { CPU: 1, RAM: 16, HDD: 10 },
      { CPU: 2, RAM: 32, HDD: 100 },
    ],
  };
  describe("POST /api/server/manage-vm", () => {
    it("Should return the total holding capacity of a server type with vms as args", () => {
      return request(app)
        .post(`/api/server/manage-vm`)
        .send(data)
        .expect(httpStatus.OK);
      // .then((res) => {
      //   expect(res.body.results.results).to.be.an("array");
      // });
    });
  });
});
