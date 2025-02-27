const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        //1. CheckUser
         const { name,password} = req.body
         let user = await User.findOneAndUpdate({ name },{ new: true})
         console.log(user)
         if(user){
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).send('Password Invalid!')
            }//ตรวจสอบ password ว่าตรงกับ mongooshDBหรือไม่
            //2. payload
            let payload = {
                user:{
                    name:user.name
                }
            }//ใช้ระบุตัวตนและสืทธิ์เข้าถึง จะมีข้อมูลเกียวกับผู้ใช้ สิทธิ์ และข้อมูลอื่น ห้ามใส่ข้อมูลสำคัญลงในนี้
            //ค้นหาจาก name(ต้องตรงกันกับ DB) แล้วเอา password ที่รับมาแล้วส่งไป compare กับ password ใน mongoosh
            
            //3. Generate
            jwt.sign(payload,'jwtsecrete',{expiresIn: '1h'},(err,token)=>{
                if(err) throw err;
                res.json({token,payload})
            })   
        }//ถ้าตรวจพบ user เจอ
        else{
            return res.status(400).send('User not Found')
        }//ตรวจว่าไม่พบ user ไม่เจอ
    }
    catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}