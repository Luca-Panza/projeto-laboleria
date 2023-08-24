import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { clientSchema } from "../schemas/clients.schema.js";
import { createClient, getOrdersByClient } from "../controllers/clients.controllers.js";

const clientRouter = Router();

clientRouter.post("/clients", validateSchema(clientSchema), createClient);
clientRouter.get("/clients/:id/orders", getOrdersByClient);

export default clientRouter;
