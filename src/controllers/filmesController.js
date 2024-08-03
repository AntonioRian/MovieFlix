const Filme = require("../models/filme")

let filmes = [];
let filmesId = 1;

const obterTodosFilmes = (req, res) => {
    res.json(filmes);
};

const adicionarFilme = (req, res) => {
    const novoFilme = new Filme(
        filmesId++, 
        req.body.titulo, 
        req.body.link,
        req.body.classificacao,
        req.body.genero
    );
    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
};

const obterFilmeId = (req, res) => {
    const filme = filmes.find(f => f.id === parseInt(req.params.id));
    if (!filme) return res.status(404).send('Filme não encontrado')
        res.json(filme);
};

const updateFilme = (req,res) => {
    const filme = filmes.find(f => f.id === parseInt(req.params.id));
    if (!filme) return res.status(404).send('Filme não encontrado')

        filme.titulo = req.body.titulo || filme.titulo;
        filme.link = req.body.link || filme.link;
        filme.classificacao = req.body.classificacao || filme.classificacao;
        filme.genero = req.body.genero || filme.genero;
        res.json(filme);
}

const excluirFilme = (req, res) => {
    const filmeIndex = filmes.findIndex(f => f.id === parseInt(req.params.id));
    if (!filmeIndex === -1) return res.status(400).send('Filme não encontrado');
    filmes.splice(filmeIndex, 1);
    res.status(204).send();
}

module.exports = {
    obterTodosFilmes,
    adicionarFilme,
    obterFilmeId,
    updateFilme,
    excluirFilme
}