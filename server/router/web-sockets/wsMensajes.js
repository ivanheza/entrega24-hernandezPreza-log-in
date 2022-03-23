import MensajesApi from "../../models/mensajes.js"
import formatoMensaje from "../../utils/formatoMensaje.js"
import normalizeMsgs from "../../utils/normalizeMsg.js"

const mensajesSocket = async (socket, sockets) => {
   ///
   const data = normalizeMsgs(await MensajesApi.readData())
   //console.log(data)
   socket.emit("mensajes", data)

   socket.on("chatMessage", async (mensaje) => {
      console.log(mensaje)
      let newmsg = formatoMensaje(mensaje)
      console.log(newmsg)
      await MensajesApi.guardarNuevo(newmsg)
      sockets.emit("mensajes", normalizeMsgs(await MensajesApi.readData()))
   })
}

export default mensajesSocket
