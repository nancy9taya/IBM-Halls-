const express = require("express");
const router = express.Router();

const UserController = require('../controllers/userControllers');
const checkAuth = require('../middleware/checkAuth');
//router.get("",checkAuth,UserController.getData);
router.post("/signup", UserController.userSignup);
router.post("/login", UserController.userLogin);
router.post("/logout" ,checkAuth,  UserController.userLogout);
router.get("/mailExist/:mail" , UserController.userMailExist);
router.get("/verify" , UserController.userVerifyMail);
router.get("/forgetPassword/:mail" , UserController.userForgetPassword);
router.post("/resetPassword" , UserController.userResetPassword);
module.exports = router;