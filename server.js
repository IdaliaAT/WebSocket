import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import path from 'path'

const __dirname = path.resolve()

// Esto hay que hacerlo porque estoy trabajando con type:module.

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.use(express.static("srcpublic"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`)
})

io.on("connection", (socket) => {
    console.log("hola", socket.id)
    socket.emit("Saludo", "Hola como estas? Soy el servidor")
    socket.on("Respuesta", data => {
        console.log("🚀", data)
    })
})


httpServer.listen(3000, () => console.log("servidor ok"))