const express = require('express');
const app = express();
const port = 3001;
const { engine } = require('express-handlebars')

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.send('Funcionando');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});