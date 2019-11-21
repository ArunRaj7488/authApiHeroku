const Joi= require('joi');
const mongoose = require('mongoose');

const createUserLogSchema = new mongoose.Schema({
    eamil: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
  
});
    const UserLog = mongoose.model('UserLog', createUserLogSchema);

    function validateUserLog(userlog) {
        const schema = {
    
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(() => {
                return {
                  message: 'Invalid password.',
                };
              }), 
            }
       return Joi.validate(userlog, validateUserLog)
    }
    
    exports.UserLog = UserLog;
    exports.validate = validateUserLog;