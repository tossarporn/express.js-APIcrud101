const express = require('express');
const router = express.Router();

const { read } = require('../Controllers/product')

router.get('/product',(req,res)=>{
    res.send('Hello Get Product')
})

router.get('/product/:id',read)

router.post('/product',(req,res)=>{
    res.send('Hello Post product ')
})

router.put('/product/:id',(req,res)=>{
    res.send('Hello Put product')
})

router.delete('/product/:id',(req,res)=>{
    res.json({name: 'phobia',id:1})
})

module.exports = router