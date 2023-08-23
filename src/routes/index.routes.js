import { Router } from "express";
import cakeRouter from "./cakes.routes.js";
import clientRouter from "./clients.routes.js";

const indexRouter = Router();

indexRouter.use(cakeRouter);
indexRouter.use(clientRouter);

export default indexRouter;
