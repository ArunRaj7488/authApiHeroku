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
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
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
        phoneNumber: Joi.string().required().regex(/^[0-9]{10}$/).error(() => {
        return {
            message: 'Invalid Phone Number.',
        };
        }),
        gender: Joi.string().valid('male', 'feamle', 'other').insensitive().required()
    }
    return Joi.validate(userReg, schema)
}
    
    exports.UserReg = UserReg;
    exports.validate = validateUserReg;