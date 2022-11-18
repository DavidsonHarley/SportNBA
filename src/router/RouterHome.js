const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const {Game} = require('../../db/models');

router.get('/', async (req,res) => {
    try {
        const newUser = req.session?.newUser;
        const {newUserID} = req.session
        const tableGameWin = await Game.findAll()
        console.log(tableGameWin);
        renderTemplate(Home, {newUser, newUserID, tableGameWin: tableGameWin.map((el) => el.get({plain: true}))}, res);

    } catch (error) {
        console.log(error);
    }
    
})

module.exports = router;