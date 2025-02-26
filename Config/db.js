const mongoosh = require('mongoose');

const connectDB = async()=>{
    try{

        await mongoosh.connect('mongodb://127.0.0.1:27017/mongoosh101');
        console.log('DB Connected')
    }
    catch(err){
        console.log(err)
    }   
}

module.exports = connectDB