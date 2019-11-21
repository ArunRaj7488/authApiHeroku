const express = require('express');
const userReg = require('../routes/user_reg');
const userLog = require('../routes/user_login');

 
const app = express();
 
module.exports = (app)=>{
    app.use(express.json());
    

    app.use('/api/login', userLog);
    app.use('/api/registration', userReg);
}