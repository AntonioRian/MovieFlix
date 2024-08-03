const express = require('express');
const app = express();
const port = 3000;
const router = require('./router')

app.use(express.json());
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});