const express = require('express'); // Importa o módulo Express
const router = express.Router(); // Cria uma instância do roteador Express
const filmesRouter = require('./filmesRouter'); // Importa o roteador de filmes
const featuredMovies = require('../data/featuredMovies');

// Define a rota base para renderizar a página inicial
router.get('/', (req, res) => {
    res.render('index', { featuredMovies });
});

// Encaminha as rotas que começam com '/filmes' para o roteador de filmes
router.use('/filmes', filmesRouter);

// Rota para a página de favoritos
router.get('/favoritos', (req, res) => {
    res.render('favoritos');
});

module.exports = router; // Exporta o roteador para uso em outros arquivos
