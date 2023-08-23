import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { cakeSchema } from "../schemas/cakes.schema.js";
import { postCake } from "../controllers/cakes.controllers.js";

const cakeRouter = Router();

cakeRouter.post("/cakes", validateSchema(cakeSchema), postCake);

export default cakeRouter;
