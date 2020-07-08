const express = require("express");
const router = express.Router();
const trackController = require("../controllers/trackControllers");
const upload = require("../middleware/multer");
const checkAuth = require('../middleware/checkAuth');

router.post("/upload",checkAuth,upload.upload.fields([{name:"music", maxCount: 1},{name: 'image', maxCount: 1}]),trackController.uploadSong);
router.post("/edit/:trackId",checkAuth,upload.upload.fields([{name:"music", maxCount: 1},{name: 'image', maxCount: 1}]),trackController.editTrack );//maybe upload modifed song
router.delete("/:trackId", trackController.deleteTrack);
router.get("/:trackId",checkAuth,trackController.getTrack );

module.exports = router;