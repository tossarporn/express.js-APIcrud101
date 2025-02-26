
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

exports.create = async (req,res)=>{
    try{
        res.send('Hello create');
    }
    catch(err){
        console.log(err)
        res.status(500).send('not create')
    }
}

exports.update = async(req,res)=>{
    try{
        res.send('Hello update')
    }
    catch(err){
        console.log(err);
        res.status(500).send('not update')
    }
}

exports.remove = async(req,res)=>{
    try{
        res.send('Hello delete')
    }
    catch(err){
        console.log(err)
        res.status(500).send('not delete')
    }
}