const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const MoreNews = require('../views/MoreNews');


router.get('/moreNews', (req,res) => {
    renderTemplate(MoreNews, null, res);
})


module.exports = router;