const express = require('express');
const router = express.Router();
const axios = require('axios');

const chaveAPI = 'd6eef64b';

// Rota para buscar filmes
router.get('/pesquisar', async (req, res) => {
    const filme = req.query.filme;

    if (!filme) {
        return res.render('index');
    }

    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${filme}&apikey=${chaveAPI}`);
        const dadosDoFilme = response.data;

        if (dadosDoFilme.Response === 'False') {
            return res.render('index', { error: dadosDoFilme.Error });
        }

        res.render('index', { filmes: dadosDoFilme.Search });
    } catch (error) {
        console.log(`Erro de busca: ${error}`);
        res.render('index', { error: 'Erro ao buscar filme.' });
    }
});

// Rota para exibir detalhes do filme
router.get('/:id', async (req, res) => {
    const filmeID = req.params.id;

    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${filmeID}&apikey=${chaveAPI}`);
        const dadosDoFilme = response.data;

        if (dadosDoFilme.Response === 'False') {
            return res.render('index', { error: dadosDoFilme.Error });
        }

        res.render('detalhes', { filme: dadosDoFilme });
    } catch (error) {
        console.log(`Erro ao buscar detalhes do filme: ${error}`);
        res.render('index', { error: 'Erro ao buscar detalhes do filme' });
    }
});

module.exports = router;
