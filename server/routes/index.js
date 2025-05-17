const router = require("express").Router();
const partnerRouter = require("./partnerRouter");
const userRouter = require('./userRouter')
router.use("/partner", partnerRouter);
router.use("/user", userRouter)
module.exports = router;
