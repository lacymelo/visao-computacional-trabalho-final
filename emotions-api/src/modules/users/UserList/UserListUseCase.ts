import { prisma } from "../../../database/prismaClient";

export class UserListUseCase {
    async execute() {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                avatar_url: true
            }
        })

        return users
    }
}