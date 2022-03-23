import express from "express"
import {generarProductos} from "../mocks/mockP.js"
const router = express.Router()

import ProductosApi from "../models/productos.js"
import authMiddleware from "../utils/middleWareAuth.js"

router.get("/productos-test", async (req, res) => {
   ///---- se genera los Mocks
   const productosNuevos = generarProductos(5)

   const data = await ProductosApi.readData()
   productosNuevos.map((p) => {
      data.push(p)
   })
   await ProductosApi.writeFile(data, "Mock Insertado")

   res.redirect("/home")
})

export default router
