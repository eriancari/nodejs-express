const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const { engine } = require('express-handlebars');

const app = express();

// app.engine(
//   "hbs",
//   engine({ layoutsDir: "views/layouts", defaultLayout: "main-layout",extname: "hbs" }),
// );

app.set('view engine', 'ejs'); // what template; also affects the extension of the file
// app.set('view engine', 'hbs'); // what template; also affects the extension of the file
// app.set('view engine', 'pug'); // what template; also affects the extension of the file
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
    res.status(404).render('404', {pageTitle: "Page Not Found!", activeShop: true});
});

app.listen(3000);