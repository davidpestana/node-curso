const express = require("express");
const path = require("path");
const app = express();
const routes = require('./routes');
const userRoutes = require('./users/routes');
const facturaRoutes = require('./facturas/routes');
express.urlencoded({extended: false});
express.json();

app.use('/rrr',(req, res, next) => {
    console.log('a redirigir');
    res.redirect('/user');
})

app.use((req, res, next) => {
    console.log(req.query);
    res.statusCode = 405;
    res.end('la query esta muy mal');
    next();
})

app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.use('/user', userRoutes);
app.use('/factura', facturaRoutes);


app.use((req, res, next) => {
  res.status(404).send('<h1 style="color: red;">404: Page not found</h1>');
});

module.exports = app;