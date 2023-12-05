import { prisma } from "../../../database/prismaClient"

interface IEmotion {
    mood: string,
    user_id: string
}

export class CreateEmotionUseCase {
    async execute({ mood, user_id }: IEmotion) {
        const date = new Date()
        date.setUTCHours(date.getUTCHours() - 3)

        // Definir os limites para os períodos do dia
        const morningStart = 6  // 6 AM
        const afternoonStart = 12  // 12 PM (meio-dia)
        const eveningStart = 18  // 6 PM

        const existingEmotion: Array<{ created_at: string }> = await prisma.$queryRaw`
            SELECT created_at
            FROM emotion
            WHERE user_id = ${user_id}
            AND DATE_TRUNC('day', created_at::timestamp) = ${date.toISOString().split('T')[0]}::timestamp
       `

        const hasEmotionInCurrentPeriod = existingEmotion.some((emotion) => {
            const emotionDate = new Date(emotion.created_at)
            const emotionHour = emotionDate.getHours()
            const currentHour = date.getHours()

            if (
                (emotionHour >= morningStart && emotionHour < afternoonStart && currentHour >= morningStart && currentHour < afternoonStart) ||
                (emotionHour >= afternoonStart && emotionHour < eveningStart && currentHour >= afternoonStart && currentHour < eveningStart) ||
                (emotionHour >= eveningStart && currentHour >= eveningStart)
            ) {
                return true
            }

            return false
        })

        if (hasEmotionInCurrentPeriod) {
            return 'O usuário tem um registro neste período.'
        }

        // Não há registros para o usuário neste dia ou neste período, prosseguir com o registro da nova emoção
        const emotion = await prisma.emotion.create({
            data: {
                mood,
                presence: true,
                user_id,
                created_at: date,
            },
        })

        return emotion
    }
}