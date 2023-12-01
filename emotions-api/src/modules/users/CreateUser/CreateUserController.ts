import { Request, Response, response } from "express";
import { Multer } from 'multer'
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request & { file: Multer.file }, res: Response) {
        const { username, name, bio, email } = req.body
        const { filename } = req.file

        const createUserUseCase = new CreateUserUseCase()
        const result = await createUserUseCase.execute({
            username,
            name,
            bio,
            email,
            avatar_url: filename
        })

        return res.status(200).json(result)
    }
}