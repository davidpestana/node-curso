const { controller } = require("./controler");

const router = require("express").Router();

router.get("/", controller.get);
router.post("/", controller.post);
router.get("/:name", controller.userGet);

module.exports = router;