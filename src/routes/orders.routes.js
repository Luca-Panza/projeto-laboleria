import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { orderSchema } from "../schemas/orders.schema.js";
import { createOrder } from "../controllers/orders.controllers.js";

const orderRouter = Router();

orderRouter.post("/order", validateSchema(orderSchema), createOrder);

export default orderRouter;
