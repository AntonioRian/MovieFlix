const express = require('express');
const router = express.Router();
const filmesRouter = require('../controllers/filmesController');

router.get('/', filmesController.obterTodosFilmes);

router.post('/', filmesController.adicionarFilme);

router.get('/:id', filmesController.obterFilmeId);

router.put('/:id', filmesController.updateFilme);

router.delete('/:id', filmesController.excluirFilme)

module.exports = router;