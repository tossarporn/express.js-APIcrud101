const jwt = require('jsonwebtoken');

exports.auth = async(req,res,next)=>{
        try{
            const token = req.headers["authtoken"];

            if(!token){
                return res.status(401).send('No token')
            }
            const decoded = jwt.verify(token,'jwtsecrete')
            req.user = decoded.user
            //console.log(decoded)
            //res.send("success")
            next();
        }
        catch(err){
            console.log(err)
            res.send("token Invalid!").status(500)
        }
}