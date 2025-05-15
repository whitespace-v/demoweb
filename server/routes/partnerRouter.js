const { request } = require("express");
const PartnerController = require("./../controllers/PartnerController");
const Router = require("express");
const router = new Router();

router.get("/all", PartnerController.get_all);
router.post("/create", PartnerController.create)
// localhost:5000/partner/create
module.exports = router;
