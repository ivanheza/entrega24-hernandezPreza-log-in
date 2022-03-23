import {promises as fs} from "fs"

class ContenedorArchivo {
   constructor(ruta) {
      this.ruta = ruta
   }
   //metodo lectura de datos
   async readData() {
      try {
         const data = await fs.readFile(this.ruta)
         const mensajes = JSON.parse(data)
         return mensajes
      } catch (error) {}
   }
   //Metodo para encontrar un elemento por ID
   async readID(id) {
      const data = await this.readData()
      //console.log(data)
      const find = data.find((p) => p.id == id)
      //console.log(find)
      return find
   }
   //Metodo para guardar un nuevo dato
   async guardarNuevo(data) {
      const array = await this.readData()
      //console.log(mensajes)
      array.push(data)

      await this.writeFile(array, "new data saved")
      return array
   }
   // Metodo para actualizar datos
   async actualizar(data) {
      const array = await this.readData()
      const datoActual = array.findIndex((d) => d.id == data.id)
      console.log(datoActual)
      if (datoActual == -1) {
         throw new Error(`Error al actualizar: no se encontró el id ${elem.id}`)
      } else {
         array[datoActual] = data

         try {
            await this.writeFile(array, "Se Actualizó")
         } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
         }
      }
   }
   //Metodo para borrar por ID

   async borrar(id) {
      const array = await this.readData()
      const datoActual = array.findIndex((d) => d.id == id)
      if (datoActual >= 0) {
         const borrados = array.filter((m) => m.id !== id)

         await this.writeFile(borrados, `Se borro el registro ${id}`)
         return {status: 200, msg: `Se borro el registro ${id}`}
      }
      return {status: 400, msg: `No existe el registro ${id}`}
   }
   // Metodo para guardar archivo con log incluido
   async writeFile(data, log) {
      try {
         const content = await fs.writeFile(this.ruta, JSON.stringify(data, null, 2))
         console.log(log ? log : "Guardado con Exito")

         return content
      } catch (error) {
         console.log("Error de escritura!", error)
      }
   }
}

export default ContenedorArchivo
