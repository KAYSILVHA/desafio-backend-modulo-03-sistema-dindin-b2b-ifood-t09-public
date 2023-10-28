const express = require('express');
const roteador = express();

roteador.post('/usuario');

roteador.post('/login');

roteador.get('/usuario');

roteador.put('/usuario');

roteador.get('/categoria');

roteador.get('/transacao');

roteador.get('/transacao/:id');

roteador.post('/transacao');

roteador.put('/transacao/:id');

roteador.delete('/transacao/:id');

roteador.get('/transacao/extrato');

module.exports = roteador;