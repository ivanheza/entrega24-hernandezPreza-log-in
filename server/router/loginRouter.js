import express from "express"
import authMiddleware from "../utils/middleWareAuth.js"
const router = express.Router()

let conectado

router.get("/home", authMiddleware, (req, res) => {
   if (req.session.user) {
      conectado = "d-none"
      console.log(conectado)
      res.render("index", {user: req.session.user, conectado})
   }
})
router.get("/", (req, res) => {
   res.redirect("/login")
})
router.get("/login", (req, res) => {
   console.log(req.session)
   res.render("login", {user: false})
})

router.post("/login", (req, res) => {
   console.log("login", req.body)

   req.session.user = req.body.nombre

   req.session.user

   res.redirect("/home")
})

router.get("/logout", authMiddleware, (req, res) => {
   var scripts = [{script: "/setTimeout.js"}]
   const nombre = req.session?.user
   res.render("logout", {user: req.session.user, scripts})
   req.session.destroy((err) => {
      if (err) {
         console.log(err)
      }
   })
})

export default router
