const jwt = require('jsonwebtoken');

exports.auth = async(req,res,next)=>{
        try{
            const token = req.headers["authtoken"];
            //console.log(token)
            if(!token){
                return res.status(401).send('No token')
            }
//jwt.verify(token,'jwtsecrete'=> ให้ตรงกับ jwt.sign) = ตรวจสอบความถูกต้อง ของ token ที่ได้จาก jwt.sign ต้องให้ตรงกัน
            const decoded = jwt.verify(token,'jwtsecrete')
            req.user = decoded.user
            //console.log(decoded)
            next();
        }
        catch(err){
            console.log(err)
            res.send("token Invalid!").status(500)
        }
}