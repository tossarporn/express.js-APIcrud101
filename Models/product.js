const mongoose = require('mongoose');

const productSchma = mongoose.Schema({
    name: String,
    detail:{
        type:String
    },
    price:{
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model('products',productSchma)