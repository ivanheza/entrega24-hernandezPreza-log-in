import dotenv from "dotenv"
dotenv.config()

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
