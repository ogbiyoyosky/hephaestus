import * as Joi from "joi";

const vms = Joi.object().keys({
  CPU: Joi.number()
    .integer()
    .error(new Error("CPU must be a integer"))
    .positive()
    .error(new Error("CPU must be a positive integer"))
    .required(),
  HDD: Joi.number()
    .integer()
    .error(new Error("HDD must be a integer"))
    .positive()
    .error(new Error("HDD must be a positive integer"))
    .required(),
  RAM: Joi.number()
    .integer()
    .error(new Error("RAM must be a integer"))
    .positive()
    .error(new Error("RAM must be a positive integer"))
    .required(),
});

const validator = {
  validateBody: (schema) => (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        status: 400,
        error: result.error.message,
      });
    }

    req.body = result.value;
    return next();
  },

  schemas: {
    calucateVm: Joi.object().keys({
      serverType: vms.required(),
      virtualMachines: Joi.array().required().items(vms),
    }),
  },
};

export default validator;
