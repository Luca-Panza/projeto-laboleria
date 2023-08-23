import { Router } from "express";
import cakeRouter from "./cakes.routes.js";
import clientRouter from "./clients.routes.js";
import orderRouter from "./orders.routes.js";

const indexRouter = Router();

indexRouter.use(cakeRouter);
indexRouter.use(clientRouter);
indexRouter.use(orderRouter);

export default indexRouter;
