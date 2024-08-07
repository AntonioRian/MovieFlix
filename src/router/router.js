const express = require('express');
const router = express.Router();
const filmesRouter = require('./filmesRouter');

router.get('/', (req, res) => {
    res.render('index');
});

router.use('/filmes', filmesRouter);

module.exports = router;