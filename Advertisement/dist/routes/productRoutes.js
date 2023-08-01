"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const auth_1 = __importDefault(require("../middleware/auth"));
const productController_1 = require("../controllers/productController");
const multer_1 = __importDefault(require("../middleware/multer"));
const productRouter = express.Router();
productRouter.post("/addproduct", auth_1.default, productController_1.addproduct);
productRouter.get("/getproduct", auth_1.default, productController_1.getproduct);
productRouter.put('/bidproduct', auth_1.default, productController_1.bidproduct);
productRouter.put("/updateproduct/:id", auth_1.default, productController_1.updateproduct);
productRouter.delete('/deleteproduct/:id', auth_1.default, productController_1.deleteproduct);
productRouter.post("/addProductImage/:id", auth_1.default, multer_1.default.upload.single('file'), productController_1.addProductImage);
exports.default = productRouter;
//# sourceMappingURL=productRoutes.js.map