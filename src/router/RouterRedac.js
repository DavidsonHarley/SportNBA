const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const RedakInfo = require('../views/RedakInfo');
const {Game} = require('../../db/models');


router.get('/', async (req,res) => {
    try {
        const tableGameWin = await Game.findAll()
        const newUser = req.session?.newUser;
        renderTemplate(RedakInfo, {newUser, tableGameWin: tableGameWin.map((el) => el.get({plain: true}))}, res);
    } catch (error) {
        console.log(error);
    }   
})
router.post('/', async (req,res) => {
    try {
        const { data, hosts, checkGuests, checkHosts, guests } = req.body;
        const tableGame = await Game.create({data, hosts, checkGuests, checkHosts, guests});
        console.log(tableGame);
        res.json({tableGame})
        // res.redirect('/red')
    } catch (error) {
        console.log(error);
    }
})
router.delete('/', async (req,res) => {
    try {
        const { id } = req.body;
        const delGame = await Game.destroy({ where: {id}})
        res.sendStatus(200)
    } catch (error) {
        console.log(error);
    }
})


module.exports= router;