"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const userController_1 = require("../controllers/userController");
const auth_1 = __importDefault(require("../middleware/auth"));
// import  login from "../controllers/userController";
const router = express.Router();
router.post("/signup", userController_1.signup);
router.post("/login", userController_1.login);
router.post("/logout", auth_1.default, userController_1.logout);
router.get("/getprofile", auth_1.default, userController_1.getprofile);
router.delete('/deleteprofile', auth_1.default, userController_1.deleteprofile);
router.put('/updateprofile', auth_1.default, userController_1.updateprofile);
router.post('/forgetpassword', userController_1.forgetPassword);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map