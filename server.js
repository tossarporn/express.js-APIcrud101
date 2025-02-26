const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// const productRouter = require('./Routes/product');
// const authRouter = require('./Routes/auth');
const {readdirSync} = require('fs');
const connectDB = require('./Config/db');


const port = 8000;
const app = express();

connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({limit:'10mb'}))

//route 2
// app.use('/',productRouter)
// app.use('/',authRouter)

//route 3 
//console.log ออกมาดู
//readdirSync('./Routes').map((r)=>console.log(r))
readdirSync('./Routes')
.map((r)=>app.use('/',require('./Routes/'+r)));

app.listen(port,()=>{
    console.log(`server run at port http://localhost:${port}`)
})