const mongoose = require('mongoose');
 
module.exports = mongoose.connect('mongodb://localhost:27017/myAuth')
        .then(()=>console.log('connected to mongodb'))
        .catch(err => console.log('Error: ',err));


        