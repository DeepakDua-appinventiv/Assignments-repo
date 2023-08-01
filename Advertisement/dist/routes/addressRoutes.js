"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const auth_1 = __importDefault(require("../middleware/auth"));
const addressController_1 = require("../controllers/addressController");
const addressRouter = express.Router();
addressRouter.post("/addAddress", auth_1.default, addressController_1.addAddress);
addressRouter.put("/updateAddress", auth_1.default, addressController_1.updateAddress);
addressRouter.post("/deleteAddress", auth_1.default, addressController_1.deleteAddress);
exports.default = addressRouter;
//# sourceMappingURL=addressRoutes.js.map