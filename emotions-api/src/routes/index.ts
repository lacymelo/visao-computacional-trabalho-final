import { Router } from "express";
import { userRoutes } from "./user.routes";
import { emotionRoutes } from "./emotion.routes";

const routes = Router()

routes.use(userRoutes)
routes.use(emotionRoutes)

export { routes }