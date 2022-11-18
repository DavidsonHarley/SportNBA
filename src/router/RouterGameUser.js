const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const GameUser = require('../views/GameUser');

router.get('/gameUser', async (req,res) => {
    try {
        renderTemplate(GameUser, null, res);
    } catch (error) {
        console.log(error);
    }
    
    
})


module.exports = router;