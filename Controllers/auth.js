const User = require('../Models/User');


exports.register = async(req,res)=>{
    try{
        //1. checkuser
        const {name,password} = req.body
        const user = await User.findOne({name})
        console.log(user)

        if(user){
            return res.send('User Already Exists!').status(400)
        }

        //2. encrypt
        
        //3. save data 


        res.send(req.body)
    }
    catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.login = async(req,res)=>{
    try{
        res.send('Hello Login Controller')
    }
    catch(err){
        console.log(err)
    }
}