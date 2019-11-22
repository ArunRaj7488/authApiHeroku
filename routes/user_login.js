const Joi = require('joi');
const bcrypt = require('bcrypt')
const router = require('express').Router();
const { UserReg } = require('../models/user_reg');

const cors = require("cors");

router.use(cors());


router.post('/', async(req,res)=>{
    
    console.log('post login')
    // const { error } = validateUser(req.body);
    // if(error) return res.status(404).send(error.details[0].message);
   
    let user = await UserReg.findOne({ email: req.body.email});
    if(!user) return res.status(404).send({status: false, error: 'Invalid user...'});
    console.log(`asdasd`, req.body)
    if(user.password != req.body.password) return res.status(404).send({status: false, error: 'Invalid password...'});
    // const validpassword = await bcrypt.compare(req.body.password, user.password);

    res.send({status: true, message:"You have login successesfully...", result:req.body})
})
function validateUser(user){
    const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{5,30}$/).required().error(() => {
            return {
              message: 'Invalid password.',
            };
          }), 
    }
    return Joi.validate(user, schema);
}
module.exports = router;