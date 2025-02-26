const Product = require('../Models/product')



exports.read = async(req,res)=>{
    try{
        const id = req.params.id;
        const producted = await Product.findOne({_id:id}).exec();
        res.send(producted)
    }
    catch(err){
        console.log(err);
        res.status(500).send('not read');
    }
    
}

exports.list = async(req,res)=>{
    try{
        const producted =  await Product.find({}).exec();
        res.send(producted);
    }
    catch(err){
        console.log(err);
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
        console.log(err);
        res.status(500).send('not create');
    }
}

exports.update = async(req,res)=>{
    try{
        const id = req.params.id;
        const updated = await Product
        .findOneAndUpdate({_id:id},req.body,{ new: true})
        .exec();

        res.send(updated);
    }
    catch(err){
        console.log(err);
        res.status(500).send('not update');
    }
}

exports.remove = async(req,res)=>{
    try{
        const id =req.params.id;
        const remove = await Product.findOneAndDelete({_id:id})
        res.send(remove);
    }
    catch(err){
        console.log(err);
        res.status(500).send('not delete');
    }
}