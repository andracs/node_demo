const {createServer} = require("http");

createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
request.on("data", chunk =>
response.write("Tak til " + chunk.toString().toUpperCase() + "!\n"));
request.on("end", () => response.end());
}).listen(8000);