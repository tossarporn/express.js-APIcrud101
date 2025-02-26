const Product = require('../Models/product')



exports.read =   async(req,res)=>{
    res.send('Hello Controller Read')
}

exports.list = async(req,res)=>{
    try{
        const producted =  await Product.find({}).exec();
        res.send(producted);
    }
    catch(err){
        console.log(err)
        res.status(500).send('not list')
    }
}

exports.create = async (req,res)=>{
    try{
    //console.log(producted); ห้ามดูlog ตัวแปรเดียวกันกับที่สร้าง ให้ใช้ req.body แทน ในการ log
        const producted = await Product(req.body).save();

        res.send(producted);
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