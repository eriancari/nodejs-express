const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>');
})


const server = http.createServer(app); // routes.handler); // to use the routes.js file as the request handler

server.listen(3000);