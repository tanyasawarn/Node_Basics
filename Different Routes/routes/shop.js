const express = require('express');

const routerShop = express.Router();

routerShop.get('/page',(req,res,next)=>{
    console.log("In another middleware");
    res.send('<h1>Hello</h1>');
});

module.exports = routerShop;