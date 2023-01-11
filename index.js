var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('index.html');

const PORT = process.env.PORT || 8000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(PORT, () => console.log("Server is listening on port " + PORT + "..."));