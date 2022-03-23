///----///---- Middleware para autenticar el acceso a rutas
const authMiddleware = (req, res, next) => {
   try {
      console.log(req.session.user)
      if (req.session?.user) {
         next()
      } else {
         console.log("algo paso")
         res.redirect("/login")
      }
   } catch (error) {
      console.log(error)
   }
}
export default authMiddleware
