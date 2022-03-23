import ProductosApi from "../../models/productos.js"
import formatoProducto from "../../utils/formatoProducto.js"
const productosSocket = async (socket, sockets) => {
   //
   socket.on("newProduct", async (product) => {
      //console.log(product)
      const newProd = await formatoProducto(product)
      console.log(newProd)
      await ProductosApi.guardarNuevo(newProd)

      sockets.emit("newProduct", newProd)
   })
   ///
   socket.emit("loadProducts", await ProductosApi.readData())
   socket.on("deleteProduct", async (id) => {
      //console.log(id)
      await ProductosApi.borrar(id)

      sockets.emit("loadProducts", await ProductosApi.readData())
   })
   socket.on("getProduct", async (id) => {
      const listaProductos = await ProductosApi.readData()
      const product = listaProductos.find((p) => p.id == id)
      //console.log(product)
      socket.emit("selectedProduct", product)
   })
}

export default productosSocket
