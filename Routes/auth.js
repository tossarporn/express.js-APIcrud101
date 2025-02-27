const express = require('express');
const router = express.Router();

const { register } = require('../Controllers/auth')
router.post('/register',register)

router.post('/login',(req,res)=>{
    res.send('Hello login')
})

module.exports = router