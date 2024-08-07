const express = require('express');
const app = express();
const port = 3001;
const { engine } = require('express-handlebars');
const router = require('./router/router')

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', router)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});