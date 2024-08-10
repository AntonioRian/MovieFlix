const express = require('express');
const port = 3001;
const {engine} = require('express-handlebars');
const router = require('./router/router');
const app = express();

// Configura o motor de templates Handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/');

// Usa o router definido no arquivo router/router.js
app.use('/', router);

// Inicia o servidor na porta 3001
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
