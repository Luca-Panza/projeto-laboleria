import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { cakeSchema } from "../schemas/cakes.schema.js";
import { createCake } from "../controllers/cakes.controllers.js";

const cakeRouter = Router();

cakeRouter.post("/cakes", validateSchema(cakeSchema), createCake);

export default cakeRouter;
