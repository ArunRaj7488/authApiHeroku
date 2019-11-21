const mongoose = require('mongoose');
 
module.exports = mongoose.connect('mongodb+srv://arun:arun@cluster0-wziy9.mongodb.net/test?retryWrites=true&w=majority')
        .then(()=>console.log('connected to mongodb'))
        .catch(err => console.log('Error: ',err));


        