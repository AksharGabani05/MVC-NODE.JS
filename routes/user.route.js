const {Router} = require("express")
const { userdata, usercreate, login } = require("../controllers/user.logic")
const check = require("../middleware/user.middleware")
const app = Router()

app.get("/" , userdata )
app.post("/" ,check , usercreate)
app.post("/login" ,  login)

module.exports = app