const express = require('express'); // Importa o módulo Express
const router = express.Router(); // Cria uma instância do roteador Express
const filmesRouter = require('./filmesRouter'); // Importa o roteador de filmes

// Define a rota base para renderizar a página inicial
router.get('/', (req, res) => {
    res.render('index'); // Renderiza a visão 'index'
});

// Encaminha as rotas que começam com '/filmes' para o roteador de filmes
router.use('/filmes', filmesRouter);

module.exports = router; // Exporta o roteador para uso em outros arquivos
