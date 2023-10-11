const express = require("express")
const connect = require("./config/db")
const router = require("./routes/user.route")
const app = express()
app.use(express.json())
app.use(router)




app.listen(8090 , () =>{
    connect();
    console.log("server is started")
})