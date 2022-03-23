import express from "express"
import authMiddleware from "../utils/middleWareAuth.js"
const router = express.Router()

router.get("/home", authMiddleware, (req, res) => {
   ///---- se pasa el valor de la variable user para hacer uso de la informacion del usuario
   if (req.session.user) {
      res.render("index", {user: req.session.user})
   }
})
router.get("/", (req, res) => {
   ///---- nos redirige a la pagina home, en caso de no tener autorización nos lleva a login
   res.redirect("/home")
})
router.get("/login", (req, res) => {
   console.log(req.session)
   ///----se envia la orden de que el usuario no esta registrado y ocultamos botones
   res.render("login", {user: false})
})

router.post("/login", (req, res) => {
   console.log("login", req.body)
   ///---- se define el usuario del login
   req.session.user = req.body.nombre

   req.session.user

   res.redirect("/home")
})

router.get("/logout", authMiddleware, (req, res) => {
   ///------- Se definió una variable scripts para cargar el script set timeout y redirigir la pagina, se envia a la hora de hacer render del hbs
   let scripts = [{script: "/setTimeout.js"}]
   ///---- se utiliza el req. session para terminar la sesion.
   const nombre = req.session?.user

   res.render("logout", {user: req.session.user, scripts})
   req.session.destroy((err) => {
      if (err) {
         console.log(err)
      }
   })
})

export default router
