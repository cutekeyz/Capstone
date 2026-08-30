// combine all your routes here as best practice
// plug all routes in one place

import { Router } from "express";
import { healthRouter } from "./health.routes.ts";



export const apiRouter = Router()

apiRouter.use(healthRouter);