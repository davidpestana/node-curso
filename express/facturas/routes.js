const router = require("express").Router();
const { userController } = require("../users/controler");
const { facturaListController, facturaController } = require('./controler');

router.get("/", facturaListController);
router.get("/:idFactura", facturaController);


module.exports = router;