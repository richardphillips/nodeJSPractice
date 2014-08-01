var http = require("http");

function start() {
  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("This is an http server");
    response.end();
  }).listen(8888);
}

exports.start = start;