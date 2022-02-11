const express = require('express')
const att = require('./exemplo')
const app = express()
const port = 8000


app.get('/', att.atualizacao);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})