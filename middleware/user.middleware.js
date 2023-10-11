const check = (req , res , next) =>{
    let {name , password} = req.body

    if(!name || !password){
        res.send({Error : "All field are require."})
    }
    else{
        next()
    }
}

module.exports = check