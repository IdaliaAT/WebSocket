const socket = io();

socket.on("Saludo", (data) => {
    console.log("🚀", data)
    socket.emit("Respuesta", "Hola soy el cliente, como estas?")
})