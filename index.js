var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('index.html');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(process.env.PORT);

process.stdout.write("port: " + process.env.PORT);