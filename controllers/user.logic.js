const users = require("../modals/user.schema")

const userdata = async(req , res) =>{
    let data = await users.find()
    res.send(data)
}
const usercreate = async(req , res) =>{
    let {email} = req.body
    let namedata= await users.find({email})
    if(!email == namedata){
        let data = await users.create(req.body)
        res.send(data)
    }
    else{
        res.send({message : "account is already exist"})
    }
}
const login = async(req , res) =>{
    let {email , password} = req.body
    let user = await users.find({email : email})
    console.log(user);
    if(!email == user){
        res.send("user not found")
    }
    else if(password != user.password){
        res.send("password is incorrect")
    }
    else{
        res.send("login successfully")
    }
}

module.exports = {userdata , usercreate , login}