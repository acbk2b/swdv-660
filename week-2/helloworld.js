var http = require("http")

http.createServer(function (request, response) {
// Send the HTTP header
// HTTP Status: 200 : OK
// Content Type: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'})

// Send the response body as "Hello World"
response.end('...and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.')

}).listen(3333)

// Console will print the message
console.log('Server running')
