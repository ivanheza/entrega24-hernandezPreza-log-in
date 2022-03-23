import config from "../config.js"
import ContenedorArchivo from "../contenedores/contenedorArchivo.js"

const ProductosApi = new ContenedorArchivo(`${config.fileSystem.path}/productos.json`)

export default ProductosApi
