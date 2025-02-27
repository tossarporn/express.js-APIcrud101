const mongoosh = require('mongoose');

const userSchema = mongoosh.Schema({
    name:String,
    password:{
        type:String
    }
},{timestamps:true});

module.exports = mongoosh.model('users',userSchema);