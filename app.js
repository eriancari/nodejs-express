const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug'); // what template
app.set('views', 'views'); // where to find the template

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public'))); // making it readable publicly

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "Page Not Found!"});
});

app.listen(3000);