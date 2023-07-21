const express = require('express');
// const { signup, login } = require("../controllers/userController");
import {signup, login} from '../controllers/userController';
// import {createPost} from '../controllers/postController';
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)

export default router;