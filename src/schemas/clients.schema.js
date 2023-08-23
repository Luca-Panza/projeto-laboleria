import joi from "joi";

export const clientSchema = joi.object({
  name: joi.string().min(2).required(),
  address: joi.string().required(),
  phone: joi
    .string()
    .pattern(/^\d{10,11}$/)
    .required(),
});
