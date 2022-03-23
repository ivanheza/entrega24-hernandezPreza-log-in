import config from "../config.js"
import ContenedorArchivo from "../contenedores/contenedorArchivo.js"

const MensajesApi = new ContenedorArchivo(`${config.fileSystem.path}/mensajes.json`)

export default MensajesApi
