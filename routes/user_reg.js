const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {UserReg, validate} = require('../models/user_reg');

router.get('/', async(req,res)=> {
    const user = await UserReg.find(req.body);
    res.send(user);
});
router.post('/', async(req, res)=> {
    
        const {error} = validate(req.body);
        if(error) return res.status(404).send(error.details[0].message);
        let user = await UserReg.findOne({email:req.body.email});
        if(user) return res.send('user already exists');
        user = new UserReg(req.body)
        const salt = await bcrypt.genSalt(8);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(user);
})
module.exports = router;