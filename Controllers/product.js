const Product = require('../Models/product')
const fs = require("fs")


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
    // console.log(req.file) 
    // console.log(req.body)
    let data = req.body
    if(req.file){
        //file จะมาจากการที่เราสร้าง property จาก model
        //แล้วเอามาต่อท้าย data เอาไว้ข้างล่างสุด
        data.file = req.file.filename
        const producted = await Product(req.body).save();//บันทึกลง mongooshDB
        res.send(producted);
    }
    else{
        res.status(500).send('not picture file')
    }//else

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
       
        if(remove?.file){//ถ้า remove มีไหมแล้ว field ชื่อ file ละมีไหม
            await fs.unlink('./uploads/'+remove.file,(err)=>{
                if(err){
                    console.log('delete_error')
                }else{
                    console.log('delete_success')
                }
            })
        }
        res.send(remove);
    }
    catch(err){
        console.log(err);
        res.status(500).send('not delete');
    }
}
