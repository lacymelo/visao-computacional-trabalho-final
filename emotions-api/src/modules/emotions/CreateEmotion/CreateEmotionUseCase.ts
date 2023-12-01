import { prisma } from "../../../database/prismaClient";

interface IEmotion {
    mood: string,
    user_id: string
}

export class CreateEmotionUseCase {
    async execute({ mood, user_id }: IEmotion) {
        const date = new Date()
        date.setUTCHours(date.getUTCHours() - 3)

        // Definir os limites para os períodos do dia
        const morningStart = 6;  // 6 AM
        const afternoonStart = 12;  // 12 PM (meio-dia)
        const eveningStart = 18;  // 6 PM

        const schedules: Array<{ created_at: string }> = await prisma.$queryRaw`
        SELECT created_at FROM emotion
        WHERE user_id = ${user_id}
          AND DATE_TRUNC('day', created_at::timestamp) = ${date.toISOString().split('T')[0]}::timestamp
          AND EXTRACT(HOUR FROM created_at::timestamp) >= ${morningStart}
          AND EXTRACT(HOUR FROM created_at::timestamp) < ${afternoonStart}
      `;

        if (schedules.length > 0) {
            return 'Registered presence!'
        }

        const emotion = await prisma.emotion.create({
            data: {
                mood,
                presence: true,
                user_id,
                created_at: date
            }
        })

        return emotion
    }
}