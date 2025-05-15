const router = require("express").Router();
const partnerRouter = require("./partnerRouter");

router.use("/partner", partnerRouter);

module.exports = router;
