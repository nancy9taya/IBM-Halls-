const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicControllers");
const upload = require("../middleware/multer");
const checkAuth = require('../middleware/checkAuth');

router.post("/getAlbum", upload.upload.array("music",[ 100]), musicController.getAllMusics);//max no of songs in album
router.post("/",checkAuth,upload.upload.fields([{name:"music", maxCount: 1},{name: 'image', maxCount: 1}]) ,musicController.addNewMusic);
router.delete("/:musicId", musicController.deleteMusic);
module.exports = router;