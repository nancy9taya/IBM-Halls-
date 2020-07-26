const express = require("express");
const router = express.Router();
const HallController = require('../controllers/hallControllers');
const checkAuth = require('../middleware/checkAuth');
router.post("/sendData",checkAuth, HallController.distributionAlgo);
router.get("/getData",checkAuth, HallController.getData);
module.exports = router;