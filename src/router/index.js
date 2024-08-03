const express = require('express');
const router = express.Router();
const filmesRouter = require('../router/filmesRouter')

router.use('/filmes', filmesRouter);

module.exports = router;