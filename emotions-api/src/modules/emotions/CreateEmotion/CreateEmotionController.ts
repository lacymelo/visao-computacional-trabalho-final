import { Request, Response } from "express";
import { CreateEmotionUseCase } from "./CreateEmotionUseCase";

export class CreateEmotionController {
    async handle(req: Request, res: Response) {
        const { mood, user_id } = req.body

        const createEmotionUseCase = new CreateEmotionUseCase()

        const result = await createEmotionUseCase.execute({
            mood,
            user_id
        })

        return res.status(200).json(result)
    }
}