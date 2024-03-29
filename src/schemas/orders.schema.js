import Joi from "joi";

export const orderSchema = Joi.object({
  clientId: Joi.number().integer().min(1).required(),
  cakeId: Joi.number().integer().min(1).required(),
  quantity: Joi.number().integer().min(1).max(4).required(),
  totalPrice: Joi.number().precision(2).required(),
});
