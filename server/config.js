import dotenv from "dotenv"
dotenv.config()
///---- ///---- Se configurará desde aqui el acceso a base de datos
export default {
   mongoDB: {
      client: "mongodb",
      cnxStr: process.env.MONGO_UR,
   },
   MDB: {
      client: "mysql",
      connection: {
         host: "192.168.64.2",
         user: "root",
         password: "",
         database: "eCommerce",
      },
   },
   fileSystem: {
      path: "./db",
   },
}
