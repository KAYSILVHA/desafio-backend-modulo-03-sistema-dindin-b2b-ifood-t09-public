const express = require('express');
const roteador = require('./rotas/roteadores');
const app = express();

app.use(express.json());
app.use(roteador);

app.listen(3000, ()=>{
  console.log("Sua Api está rodando na porta 3000");
});