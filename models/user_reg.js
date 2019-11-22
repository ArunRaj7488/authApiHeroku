const BaseJoi= require('joi');
const Joi = BaseJoi.extend(require("joi-date-extensions"))

const mongoose = require('mongoose');

const createUserRegSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    gender:{
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
  
});
const UserReg = mongoose.model('UserReg', createUserRegSchema);

function validateUserReg(userReg) {
    const schema = {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(() => {
            return {
              message: 'Invalid password.',
            };
          }), 
        dob: Joi.date().format("DD/MM/YYYY"),
        phoneNumber: Joi.string().regex(/^[0-9]{10}$/).error(() => {
        return {
            message: 'Invalid Phone Number.',
        };
        }),
        gender: Joi.string().valid('male', 'female', 'other').insensitive()
    }
    return Joi.validate(userReg, schema)
}
    
    exports.UserReg = UserReg;
    exports.validate = validateUserReg;