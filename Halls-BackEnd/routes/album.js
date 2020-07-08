const express = require('express');
const router = express.Router();
const AlbumController = require('../controllers/albumControllers');
const checkAuth=require('../middleware/checkAuth');
const upload = require("../middleware/multer");

router.post("/addAlbum",checkAuth,upload.upload.fields([{name:"music", maxCount: 50},{name: 'image', maxCount: 10}]),AlbumController.addAlbum);
router.post("/editAlbum/:albumId",checkAuth,upload.upload.fields([{name:"music", maxCount: 50},{name: 'image', maxCount: 10}]),AlbumController.editAlbum);//just edit info for each track in the album and the album itself
router.post("/addTrack/:albumId",checkAuth,upload.upload.fields([{name:"music", maxCount: 1},{name: 'image', maxCount: 1}]),AlbumController.addTrack);//add track to album(id)
router.delete("/removeTrack/:trackId/:albumId",checkAuth,AlbumController.removeTrack);  //add track to album(id)
router.delete("/deleteAlbum/:albumId",checkAuth, AlbumController.deleteAlbum);
module.exports = router;  