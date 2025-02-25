const express = require('express');
const router = express.Router();

router.get('/product',(req,res)=>{
    res.send('Hello Product')
})

module.exports = router