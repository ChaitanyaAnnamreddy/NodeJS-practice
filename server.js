const http = require('node:http') // or require('http') both are same

const server = http.createServer((req, res) => {
  if (req.url === '/profile') {
    res.end('Hello World!')
  }
  if (req.url === '/about') {
    res.end('About page')
  }
  res.end('Hello World!')
})

server.listen(7777)
