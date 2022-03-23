import pkg from "knex"
import generarProducto from "../utils/generateProduct.js"
const {knex} = pkg
import {customAlphabet} from "nanoid"

const prodID = customAlphabet("1234567890abcdef", 4)

class ContenedorSQL {
   constructor(config, table) {
      this.knex = knex(config)
      this.table = table
   }
   //Funcion para guardar producto
   ///
   //ApiMOCK

   async apiMock(cant) {
      const nuevos = []

      for (let i = 0; i < cant; i++) {
         const nuevoUsuario = generarProducto(prodID())

         try {
            nuevos.push(nuevoUsuario)
            await this.insertData(nuevos)
         } catch (error) {
            console.log(error)
         }
      }
      console.log(nuevos)
   }

   //INSERT DATA
   async insertData(data) {
      try {
         return await this.knex
            .insert(data)
            .into(this.table)
            .then(() => console.log("Data inserted"))
            .finally(() => {
               knex(this.client).destroy()
            })
      } catch (error) {
         console.log("Error de Lectura!", error)
      }
   }
   //GET ALL DATA
   async getAll() {
      try {
         const content = await this.knex
            .select("*")
            .from(this.table)
            .finally(() => {
               knex(this.client).destroy()
            })
         //console.log(content)
         return content
      } catch (error) {
         console.log("Error de Lectura!", error)
      }
   }
   async getbyID(id) {
      try {
         const content = await this.knex
            .select("*")
            .from(this.table)
            .where({id: id})
            .first()
            .catch((err) => {
               console.log(err)
               throw err
            })
            .finally(() => {
               knex(this.client).destroy()
            })
         return content
      } catch (error) {
         console.log("No se encontro el ID!", error)
      }
   }
   async deleteByID(id) {
      try {
         const content = await this.knex
            .from(this.table)
            .where({msgSock: id})
            .del()
            .then(() => console.log(`Dato con el id:${id} fue borrado`))
            .catch((err) => {
               console.log(err)
               throw err
            })
            .finally(() => {
               knex(this.client).destroy()
            })
         //console.log(content)
         return content
      } catch (error) {
         console.log("No se encontro el ID!", error)
      }
   }
   async deleteData() {
      try {
         await this.knex
            .del()
            .from(this.table)
            .then(() => console.log(`Datos borrados con exito`))
            .catch((err) => {
               console.log(err)
               throw err
            })
            .finally(() => {
               knex(this.client).destroy()
            })
      } catch (error) {
         console.log("No se encontro el ID!", error)
      }
   }

   async deleteProduct(id) {
      try {
         return await this.knex
            .del()
            .from(this.table)
            .where({id: id})
            .then(() => console.log(`Dato con el id:${id} fue borrado`))
            .catch((err) => {
               console.log(err)
               throw err
            })
            .finally(() => {
               knex(this.client).destroy()
            })
      } catch (error) {
         console.log("No se encontro el ID!", error)
      }
   }

   async updateData(data) {
      try {
         return await this.knex
            .from(this.table)
            .where({id: data.id})
            .update(data)
            .then(() => console.log(`Dato con el id:${data.id} fue editado`))
            .catch((err) => {
               console.log(err)
               throw err
            })
            .finally(() => {
               knex(this.client).destroy()
            })
      } catch (error) {
         console.log("No se encontro el ID!", error)
      }
   }
}

export default ContenedorSQL
