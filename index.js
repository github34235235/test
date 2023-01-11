var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('index.html');

process.env.PORT = 8000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(process.env.PORT, () => console.log("Server is listening on port " + process.env.PORT + "..."));