const Joi = require('joi');
const bcrypt = require('bcrypt')
const router = require('express').Router();
const { UserReg } = require('../models/user_reg');

router.post('/', async(req,res)=>{
    console.log('post login')
    const { error } = validateUser(req.body);rs
    if(error) return res.status(404).send(error.details[0].message);
   
    let user = await UserReg.findOne({ email: req.body.email});
    if(!user) return res.status(404).send({error: 'Invalid user...'});
    
    if(user.password != req.body.password) res.status(404).send({error: 'Invalid password...'});
    // const validpassword = await bcrypt.compare(req.body.password, user.password);

    res.send({message:"You have login successesfully...", result:req.body})
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