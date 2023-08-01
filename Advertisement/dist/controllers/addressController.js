"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.addAddress = void 0;
const addressModel_1 = __importDefault(require("../models/addressModel"));
//add address api
async function addAddress(req, res) {
    const { house_number, street_number, area, landmark, city, country, zip_code, state, status, addressType } = req.body;
    // console.log(req.body);
    const uid = String(req.userId);
    // console.log(uid);
    try {
        const newAddress = await addressModel_1.default.create({
            house_number: house_number,
            street_number: street_number,
            area: area,
            landmark: landmark,
            city: city,
            country: country,
            zip_code: zip_code,
            state: state,
            status: status,
            addressType: addressType,
            user_id: uid
        });
        //await newProduct.save();
        const addresses = await addressModel_1.default.findOne({ where: { user_id: uid }, raw: true });
        res.status(201).json(newAddress);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
exports.addAddress = addAddress;
//update address api
async function updateAddress(req, res) {
    const id = req.params.id;
    const { house_number, street_number, area, landmark, city, country, zip_code, state, status, addressType } = req.body;
    const uid = req.userId;
    const updateAddress = await addressModel_1.default.findOne({ where: { id: id } });
    try {
        if (!updateAddress) {
            return res.status(404).json({ message: "address not found" });
        }
        await addressModel_1.default.update({
            house_number: house_number,
            street_number: street_number,
            area: area,
            landmark: landmark,
            city: city,
            country: country,
            zip_code: zip_code,
            state: state,
            status: status,
            addressType: addressType,
        }, { where: { id: id } });
        return res.status(200).send("address updated successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
exports.updateAddress = updateAddress;
//delete address api
async function deleteAddress(req, res) {
    const id = req.params.id;
    const uid = req.userId;
    try {
        const deleteaddress = await addressModel_1.default.findOne({ where: { user_id: uid } });
        if (!deleteaddress) {
            return res.status(404).json({ message: "address not found" });
        }
        await addressModel_1.default.destroy({ where: { user_id: uid } });
        res.status(200).json({ message: "address deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.deleteAddress = deleteAddress;
//# sourceMappingURL=addressController.js.map