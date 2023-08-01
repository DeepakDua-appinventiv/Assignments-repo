const express = require('express');
import  {forgetPassword, signup, login,logout, getprofile, deleteprofile, updateprofile}  from "../controllers/userController";
import auth from "../middleware/auth"
// import  login from "../controllers/userController";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",auth, logout);
router.get("/getprofile",auth, getprofile);
router.delete('/deleteprofile', auth, deleteprofile);
router.put('/updateprofile', auth, updateprofile);
router.post('/forgetpassword', forgetPassword);

export default router;