import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { clientSchema } from "../schemas/clients.schema.js";
import { createClient } from "../controllers/clients.controllers.js";

const clientRouter = Router();

clientRouter.post("/clients", validateSchema(clientSchema), createClient);

export default clientRouter;
