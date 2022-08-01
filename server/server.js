require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
const router = require('./routes/routes');
const crypto = require('crypto');

const cors = require('cors')

const multer = require('multer');
const upload = multer();
const secretKey = crypto.randomBytes(64).toString('hex');


 
app.use(cors())

// mongoose.connect(process.env.MONGO_URI)
//Mondodb connecton setup and creating Database
mongoose.connect('mongodb+srv://laundrycart:Laundry%40123@laundrycart.ip7w6.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log('Connected to database !!')})
.catch((error)=>{console.log(error)});

//Data parser middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}));
// app.use(bodyparser.urlencoded({extended:true}))
app.use(upload.array()); 
app.use(express.static('public'));

app.use(cors());


//Middlewares --- Routers
app.use(router)

//Server Connection Setup
app.listen(port , ()=>{
    console.log('SERVER CONNECTED !!')
}) 