import { prisma } from "../../../database/prismaClient"

interface IUser {
    username: string
    name: string
    bio?: string
    email: string
    avatar_url: string
}

export class CreateUserUseCase {
    async execute({ username, name, bio, email, avatar_url }: IUser) {
        // verifica se o usuário já existe
        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (userExists) {
            throw new Error("User already exists.")
        }

        // cria uma nova conta
        const user = await prisma.user.create({
            data: {
                username,
                name,
                bio,
                email,
                avatar_url
            }
        })

        return user
    }
}