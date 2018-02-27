const {createServer} = require("http");

// Vi laver et JSON object, der repræsenterer vejret, feks. sne, slud eller whatever

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    // Hvis reg.url == /nedb%C3%B8r  så returner JSON objektet
    response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
response.end();
});
server.listen(8000);