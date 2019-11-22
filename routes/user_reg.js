const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {UserReg, validate} = require('../models/user_reg');

router.get('/', async(req,res)=> {
    const user = await UserReg.find(req.body);
    res.send(user);
});
router.post('/', async(req, res)=> {
    
        let user = await UserReg.findOne({email:req.body.email});
        if(user) return res.send({status: true, error: 'user already exists'});
        
        user = new UserReg(req.body)

        await user.save();
        res.send({status: true});
})
module.exports = router;