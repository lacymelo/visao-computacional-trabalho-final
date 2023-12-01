import express, { NextFunction, Request, Response } from "express"
import cors from 'cors'
import path from 'path'
import "express-async-errors"
import { routes } from "./routes"

const app = express()

app.use(cors())

//para aceitar requisições do tipo json
app.use(express.json())

// Use path.join para garantir que o caminho seja construído corretamente em sistemas operacionais diferentes
const uploadsPath = path.join(__dirname, '../uploads');

app.use('/uploads', express.static(uploadsPath));

app.use(routes)

//middleware interceptador de error
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: "server internal error"
    })
})

//iniciando o servidor
app.listen(3333, () => console.log("Server is running!"))