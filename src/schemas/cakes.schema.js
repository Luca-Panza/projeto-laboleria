import joi from "joi";

export const cakeSchema = joi.object({
  name: joi.string().min(2).trim().required(),
  price: joi.number().precision(2).min(0.01).required(),
  image: joi.string().uri().required(),
  description: joi.string().trim(),
});
