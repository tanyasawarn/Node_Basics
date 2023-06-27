
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const routerShop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use('/home',routerShop);

 app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found </h1>');
 })
 
 
 

app.listen(4000);
