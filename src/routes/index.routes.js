import { Router } from "express";
import cakeRouter from "./cakes.routes.js";

const indexRouter = Router();

indexRouter.use(cakeRouter);

export default indexRouter;
