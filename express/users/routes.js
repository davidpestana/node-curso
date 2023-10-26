const router = require("express").Router();
const { controller1, userController } = require('./controler');
const facturasRouter = require('../facturas/routes');
const userMiddelware = require("./middelware");



router.get("/bienvenida", controller1);
router.get("/:name", userMiddelware ,userController);
router.use("/:name/factura", userMiddelware, facturasRouter);



module.exports = router;