const User = require('../Models/User');
const bcrypt = require('bcryptjs');


exports.register = async(req,res)=>{
    try{
        //1. checkuser
        const {name,password} = req.body
        let user = await User.findOne({name})
        //console.log(user) ค้นหา user จาก database

        if(user){
            return res.send('User Already Exists!').status(400)
        }

        //2. encrypt
        const salt = await bcrypt.genSalt(10)//เข้ารหัส
        user = new User({
            name,
            password
        })//นำข้อมูลที่ได้จากการ req.body นำมาสร้างใหม่เพื่อพร้อมที่จะ บันทึกลง mongooshDB
        user.password = await bcrypt.hash(password,salt)//นำ password มาเข้ารหัส

        
        //3. save data 
        await user.save();
        res.send("Register Success")
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