const express = require('express')
const att = require('./exemplo')
const app = express()
const port = 8000


app.get("/", (req, res)=> {
  res.status(200).json({
    msg : "I love you <3"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})