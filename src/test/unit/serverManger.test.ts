import { expect } from "chai";
import "mocha";
import ServerManager from "../../api/Helpers/calculateServerCapacity";
require("ts-mocha");

describe("calculate", function () {
  it("calculate the server capacity", function () {
    let serverType = { CPU: 2, RAM: 32, HDD: 100 };
    let virtualMachines = [
      { CPU: 1, RAM: 16, HDD: 10 },
      { CPU: 1, RAM: 16, HDD: 10 },
      { CPU: 2, RAM: 32, HDD: 100 },
    ];
    let serverManager = new ServerManager(serverType, virtualMachines);

    let result = serverManager.calculate();

    expect(result).equal(2);
  });
});
