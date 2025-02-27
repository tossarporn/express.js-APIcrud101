const express = require('express');
const router = express.Router();

router.post('/register',(req,res)=>{
    res.send('Hello register')
})

router.post('/login',(req,res)=>{
    res.send('Hello login')
})

module.exports = router