const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const UpdateTable = require('../views/UpdateTable');
const {Game} = require('../../db/models');


router.get('/:id', async (req,res) => {
    try {
        const newUser = req.session?.newUser;
        const { id } = req.params;
        const tableGame = await Game.findOne({where: {id}})
        renderTemplate(UpdateTable, {newUser, tableGame},res)
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async (req,res) => {
    try {
        const { id, data, hosts, checkGuests, checkHosts, guests } = req.body;
        const tableGame = await Game.findOne({where: {id}});
        await tableGame.update({data, hosts, checkGuests, checkHosts, guests})
        console.log(tableGame);
        res.json({tableGame})
    } catch (error) {
        console.log(error);
    }
})


module.exports= router;