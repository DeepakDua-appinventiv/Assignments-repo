"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductImage = exports.getproduct = exports.updateproduct = exports.deleteproduct = exports.bidproduct = exports.addproduct = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
//addproduct api
async function addproduct(req, res) {
    const { product_name, description, product_images, base_price } = req.body;
    console.log(req.body);
    const uid = String(req.userId);
    console.log(uid);
    try {
        const newProduct = await productModel_1.default.create({
            product_name: product_name,
            description: description,
            product_images: product_images,
            base_price: base_price,
            user_id: uid
        });
        //await newProduct.save();
        const products = await productModel_1.default.findOne({ where: { user_id: uid }, raw: true });
        res.status(201).json(newProduct);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
exports.addproduct = addproduct;
//  bid product api
async function bidproduct(req, res) {
    try {
        // const id = req.params.id;
        const { id, bidding } = req.body;
        const uid = String(req.userId);
        const bidproduct = await productModel_1.default.findOne({ where: { id: id } });
        if (!bidproduct) {
            return res.status(404).json({ message: "product not found" });
        }
        if (bidproduct) {
            const check1 = await productModel_1.default.findOne({ where: { id: id, user_id: uid } });
            if (check1) {
                return res.status(400).send("You cannot bid on your own product");
            }
            else if (bidproduct.base_price >= bidding) {
                return res
                    .status(400)
                    .send("bidding prize should greater than basePrice");
            }
            const result = await productModel_1.default.update({ newBiddingPrice: bidding, bidder_id: uid }, { where: { id: id } });
        }
        else {
            return res.status(400).send("Product not found");
        }
        bidproduct.bidder_id = +uid;
        bidproduct.bidding = bidding;
        await bidproduct.save();
        res.status(200).json({ message: "Bidding done successfully on product" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.bidproduct = bidproduct;
// //delete product api
async function deleteproduct(req, res) {
    const id = req.params.id;
    const uid = req.userId;
    try {
        const deleteproduct = await productModel_1.default.findOne({ where: { user_id: uid } });
        if (!deleteproduct) {
            return res.status(404).json({ message: "product not found" });
        }
        await productModel_1.default.destroy({ where: { user_id: uid } });
        res.status(200).json({ message: "product deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.deleteproduct = deleteproduct;
//update product api
async function updateproduct(req, res) {
    const id = req.params.id;
    const { product_name, description, product_images, base_price } = req.body;
    const uid = req.userId;
    const updateproduct = await productModel_1.default.findOne({ where: { id: id } });
    try {
        if (!updateproduct) {
            return res.status(404).json({ message: "product not found" });
        }
        await productModel_1.default.update({
            product_name: product_name,
            description: description,
            product_images: product_images,
            base_price: base_price,
        }, { where: { id: id } });
        return res.status(200).send("Product updated successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
exports.updateproduct = updateproduct;
//getproduct api
async function getproduct(req, res) {
    const uid = String(req.userId);
    console.log(uid);
    try {
        const products = await productModel_1.default.findAll({ where: { user_id: { [sequelize_1.Op.ne]: uid } }, raw: true });
        res.status(200).json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
exports.getproduct = getproduct;
//addProductImage API
async function addProductImage(req, res) {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const product_id = Number(req.params.id);
    console.log("part2");
    if (!product_id) {
        return res.status(400).json({ error: "Product id not found" });
    }
    const imagePath = "./public/uploads/" + req.file.originalname;
    console.log("part3");
    const productPic = fs_1.default.readFileSync(path_1.default.resolve(imagePath));
    const product = await productModel_1.default.findOne({ where: { user_id: req.userId, id: product_id } });
    if (!product) {
        return res.status(400).json({ error: "No Such Product Found" });
    }
    product.product_images = productPic;
    await product.save();
    fs_1.default.unlink(path_1.default.resolve(imagePath), (err) => {
        console.log("error in file delete:", err);
    });
    return res
        .status(200)
        .json({ message: "Product Image updated successfully" });
}
exports.addProductImage = addProductImage;
//# sourceMappingURL=productController.js.map