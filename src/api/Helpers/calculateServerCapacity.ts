/**
 * Returns the maximum capacity for a given server configuration
 * provided with a number of virtual machines in linear time (0(n)).
 *
 * @param {Object} serverType
 * @param {Array<Object>} virtualMachines
 *
 * @returns {Number}
 *
 */

interface serverMakeup {
  CPU: number;
  RAM: number;
  HDD: number;
}

interface IServerPlanning {
  serverType: serverMakeup;
  virtualMachines: Array<serverMakeup>;
  calculate(
    serverType: serverMakeup,
    virtualMachines: Array<serverMakeup>
  ): number;
}

class ServerManager implements IServerPlanning {
  serverType;
  virtualMachines;
  data: Array<serverMakeup> = [];
  carryingCapacity: number = 0;

  constructor(serverType: serverMakeup, virtualMachines: Array<serverMakeup>) {
    this.serverType = serverType;
    this.virtualMachines = virtualMachines;
  }

  calculate(): number {
    let initialServerType: serverMakeup = {
      CPU: 0,
      RAM: 0,
      HDD: 0,
    };

    // Ensure virtual machines are sorted by "weight" or "cost".
    this.virtualMachines.sort((a, b) => {
      let costForA = a.CPU + a.RAM + a.HDD;
      let costForB = b.CPU + b.RAM + b.HDD;

      return costForA - costForB;
    });
    // @method canFit
    // @description - A curried function for determining if a VM can fit within the server config.
    // @returns {Boolean}
    let canFit = (prev, curr) => (type) =>
      prev[type] + curr[type] <= this.serverType[type];

    this.virtualMachines.reduce((prev, curr) => {
      // Prepare curried function statement
      let fittable = canFit(prev, curr);

      // If the current VM can fit in without overload,
      // increase server carrying capacity
      if (fittable("HDD") && fittable("RAM") && fittable("CPU")) {
        this.carryingCapacity++;

        return {
          CPU: prev.CPU + curr.CPU,
          RAM: prev.RAM + curr.RAM,
          HDD: prev.HDD + curr.HDD,
        };
      }

      return {
        CPU: prev.CPU,
        RAM: prev.RAM,
        HDD: prev.HDD,
      };
    }, initialServerType);
    return this.carryingCapacity;
  }
}
export default ServerManager;
