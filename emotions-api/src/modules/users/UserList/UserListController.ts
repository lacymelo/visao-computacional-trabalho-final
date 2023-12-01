import { Request, Response, response } from "express";
import { UserListUseCase } from "./UserListUseCase";
import path from "path"

interface IUser {
    id: string
    name: string
    avatar_url: string
}

export class UserListController {
    async handle(req: Request, res: Response) {
        const userListUseCase = new UserListUseCase()

        const users = await userListUseCase.execute()

        const result = users.map((user: IUser) => {
            return { ...user, avatar_url: `${process.env.URL_LOCAL}/uploads/${user.avatar_url}` }
        })

        return res.status(200).json(result)
    }
}