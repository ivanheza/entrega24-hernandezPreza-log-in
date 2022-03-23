import ProductosApi from "../../models/productos.js"
import formatoProducto from "../../utils/formatoProducto.js"
const productosSocket = async (socket, sockets) => {
   //nuevo porducto
   socket.on("newProduct", async (product) => {
      //console.log(product)
      const newProd = await formatoProducto(product)
      console.log(newProd)
      await ProductosApi.guardarNuevo(newProd)

      sockets.emit("newProduct", newProd)
   })
   ///Carga productos para cada socket
   socket.emit("loadProducts", await ProductosApi.readData())

   //Socket para borrar producto
   socket.on("deleteProduct", async (id) => {
      //console.log(id)
      await ProductosApi.borrar(id)

      /// se cargan los productos para los sockets
      sockets.emit("loadProducts", await ProductosApi.readData())
   })
   //se define socket para escoger un solo producto, esto con la finalidad de poder hacer uso del boton borrar
   socket.on("getProduct", async (id) => {
      const listaProductos = await ProductosApi.readData()
      const product = listaProductos.find((p) => p.id == id)
      //console.log(product)
      socket.emit("selectedProduct", product)
   })
}

export default productosSocket
