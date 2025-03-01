const mongoose = require('mongoose');

const productSchma = mongoose.Schema({
    name: String,
    detail:{
        type:String
    },
    price:{
        type:Number
    },
    file:String//สร้าง property และ dataType ให้กับ DB 
},{timestamps:true})

module.exports = mongoose.model('products',productSchma)