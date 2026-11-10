const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.render('shop');
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = routes;