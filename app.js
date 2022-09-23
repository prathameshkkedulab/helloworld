const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('AVC')
})

app.listen(5000)