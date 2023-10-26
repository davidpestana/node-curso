const router = require("express").Router();

router.get("/bienvenida", (req, res, next) => {
  res.send("<h1>Bienvenido a mi página!</h1>");
});

router.get("/", (req, res, next) => {
  res.send("<marquee>Hello World!</marquee>");
});

module.exports = router;