const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/var', (req, res) => {
  const message = 'Hello (varliable)'
  res.send(message)
})

app.get('/onis', (req, res) => {
  res.sendFile(__dirname + '/onis.json')
})

app.post('/post', (req, res) => {
  res.send('postmethod')
})
app.listen(port, () => {
  console.log(`app listening on port http://localhost:${3000}`)
})
