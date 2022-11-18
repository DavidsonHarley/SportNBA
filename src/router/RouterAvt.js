const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const bcrypt = require('bcrypt');
const Avtorisation = require('../views/Avtorisation');
const {User} = require('../../db/models');

router.get('/avt', (req,res) => {
    renderTemplate(Avtorisation, null, res);
})

router.post('/avt', async (req,res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({where: {name}});
        if(!user){
            res.redirect('/');
            return;
        }
        const passCheck = await bcrypt.compare(password, user.password);
        if (passCheck){
            req.session.newUser = user.name;
            req.session.newUserID = user.id;
            req.session.save(() => {
                res.redirect('/');
            });
        }else{
            res.redirect('/');
        }

    } catch (error) {
        console.log(error);
    }
})


module.exports = router;