import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {create} from "express-handlebars"
import path from "path"
import session from "express-session"
import MongoStore from "connect-mongo"
import {createServer} from "http"
import {Server} from "socket.io"
import productosRouter from "./router/ApiProductosRouter.js"
import loginRouter from "./router/loginRouter.js"
import productosSocket from "./router/web-sockets/wsProductos.js"
import mensajesSocket from "./router/web-sockets/wsMensajes.js"

import config from "./config.js"

//////////////////////////////////////-----
//socket servidor api
const app = express()
dotenv.config()
const httpServer = createServer(app)
const io = new Server(httpServer)

//SOCKET IO
///---- se definen los sockets para productos y mensajes
io.on("connection", async (socket) => {
   productosSocket(socket, io.sockets)
   mensajesSocket(socket, io.sockets)
})
///---- Config Servidor
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true}))
///----  Configuración de Mongo Store
app.use(
   session({
      secret: "secret",
      store: MongoStore.create({
         mongoUrl: config.mongoDB.cnxStr,
      }),
      resave: false,
      saveUninitialized: false,
      rolling: true,
      cookie: {
         maxAge: 60000,
      },
   })
)

///---- handlebars
const hbs = create({
   extname: ".hbs", //extension
   defaultLayout: "main",
   layoutsDir: path.join(app.get("views"), "layouts"),
   partialsDir: path.join(app.get("views"), "partials"),
})
app.use(express.static("./public"))
app.engine("handlebars", hbs.engine)

app.set("view engine", "handlebars")
app.set("views", "./views")
///---- Rutas API REST
app.use("/api", productosRouter)

///---- rutas para el login y home
app.use(loginRouter)

app.get("*", (req, res) => {
   res.status(400).json({error: 0, descripcion: "La ruta que buscas no existe"})
})
///
const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
   console.log("listening on: ", PORT)
})
