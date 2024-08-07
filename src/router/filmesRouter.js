const express = require('express');
const router = express.Router();
const axios = require('axios')

const chaveAPI = ''

router.get('/pesquisar', (req,res) => {
    const filme = req.query.filme;

    if (!filme) {
        return res.render('index')
    }
})