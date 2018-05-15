"use strict";

const http =  require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
    if (request.url == '/stylesheets2.css') {
        const css = fs.readFileSync('stylesheets.css', 'utf8');
        response.end(css);
    } else {
        const html = fs.readFileSync('index.html', 'utf8');
        response.end(html);
    }

});

server.listen(3000);
console.log("Server started");