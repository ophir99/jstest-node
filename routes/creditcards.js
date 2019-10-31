const router = require("express").Router();
const creditcard = require("./../controllers/creditcards");
router.get("/all", creditcard.getAll);
router.post("/new", creditcard.save);

module.exports = router;
