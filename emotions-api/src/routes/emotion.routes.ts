import { Router } from "express";
import { CreateEmotionController } from "../modules/emotions/CreateEmotion/CreateEmotionController";

const emotionRoutes = Router()
const createEmotionController = new CreateEmotionController()

emotionRoutes.post('/emotion/create', createEmotionController.handle)

export { emotionRoutes }