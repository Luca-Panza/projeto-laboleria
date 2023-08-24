import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { orderSchema } from "../schemas/orders.schema.js";
import { createOrder, getOrders, getOrdersById } from "../controllers/orders.controllers.js";

const orderRouter = Router();

orderRouter.post("/order", validateSchema(orderSchema), createOrder);
orderRouter.get("/orders", getOrders);
orderRouter.get("/orders/:id", getOrdersById);

export default orderRouter;
