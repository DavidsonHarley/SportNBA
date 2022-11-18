const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const bcrypt = require('bcrypt');
const Registration = require('../views/Registration');
const {User} = require('../../db/models');


router.get('/reg', (req,res) => {
    renderTemplate(Registration, null, res);
})

router.post('/reg', async ( req, res) => {
    try {
        const {name, password, email} = req.body;
        const hech = await bcrypt.hash(password, 10);
        const userReg = await User.create({name, password: hech, email});
        res.redirect('/avt')
        //  console.log(userReg);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;