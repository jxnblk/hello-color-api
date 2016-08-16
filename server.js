
const http = require('http')
const url = require('url')
const querystring = require('querystring')
const hello = require('hello-color').default
const bikeshed = require('@jxnblk/bikeshed')

const handleRequest = (req, res) => {
  const { query } = url.parse(req.url, true)
  res.setHeader('Content-Type', 'application/json')
  const base = query.c ? '#' + query.c : bikeshed()
  const result = hello(base, {
    saturation: 1 / 8,
    contrast: 3,
    hues: 5,
  })
  res.end(JSON.stringify(result))
}

const server = http.createServer(handleRequest)

server.listen(3000, () => {
  console.log('Listening on 3000')
})

