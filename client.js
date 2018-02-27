/*var http = require("http");

var request = http.request({
    hostname: "eloquentjavascript.net",
    path: "/20_node.html",
    method: "GET",
    headers: {Accept: "text/html"}
}, function(response) {
    console.log("Server responded with status code",
        response.statusCode);
});
request.end();
 */


const simon = require("http");
let requestStream = simon.request({
    hostname: "eloquentjavascript.net",
    path: "/20_node.html",
    method: "GET",
    headers: {Accept: "text/html"}
}, response => {
    console.log("Server responded with status code",
    response.statusCode);
});
requestStream.end();

