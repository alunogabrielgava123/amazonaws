const express = require('express')
const att = require('./exemplo')
const app = express()
const port = 8000


app.get('/atualizacao', att.atualizacao);

app.get('/', (req, res) => {
  res.status(200).json({
      msg : "Servidor amazon rodando"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})