
exports.read =   async(req,res)=>{
    res.send('Hello Controller Read')
}

exports.list = async(req,res)=>{
    try{
        res.send('Hello list');
    }
    catch(err){
        console.log(err)
        res.status(500).send('not list')
    }
}