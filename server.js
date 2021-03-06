const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const routes = require('./routes');

server.use(express.static('public'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(3333);