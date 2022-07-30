const express = require('express')
const router = express.Router();

const signUpAuth = require('../controller/signupauth');
const loginAuth = require('../controller/loginauth')
const userdata = require('../controller/userdata');
const authorization = require('../controller/authorization');

const createorder = require('../controller/createorder');

const pastorder=require("../controller/pastorder")
const deleteorder=require("../controller/orders")





router.post('/register',signUpAuth, userdata)

router.post('/login',loginAuth)

router.get("/pastorder",pastorder)


router.post('/createorder',createorder)

module.exports = router;

router.delete("/deleteorder/:_id",deleteorder)
router.get('/',(req,res)=>{
    res.send("Welcome to Base Page")
})

module.exports = router;

