const express = require("express");
const router = express.Router();
const HallController = require('../controllers/hallControllers');
const checkAuth = require('../middleware/checkAuth');
router.post("/sendData", HallController.distributionAlgo);
//router.get("/getData:id",checkAuth, HallController.getData)
module.exports = router;