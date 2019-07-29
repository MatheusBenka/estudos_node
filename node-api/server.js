const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// #region DB
// db connect
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser:true}
);
requireDir('./src/models');
// #endregion

// #region config_app
const app = express();

// add json util (receber json body)
app.use(express.json());
app.use(cors());
app.use('/api',require('./src/routes')); // register routes

app.use(function (req, res, next) {    
    res.header('Content-Type', 'application/json');
    try{
        next();
    }catch(err){
        res.send('Internal server error');
    }
    
});

app.listen(3001);
// #endregion

