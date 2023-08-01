"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgetPassword = exports.updateprofile = exports.deleteprofile = exports.getprofile = exports.logout = exports.login = exports.signup = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "secret";
const consumers_1 = require("stream/consumers");
const sessionModel_1 = __importDefault(require("../models/sessionModel"));
// import User from '../models/userModel';
//signup API
async function signup(req, res) {
    const { username, email, password, status, profile, mobile_number, gender, dob, favoriteBook } = req.body;
    try {
        const existingUser = await userModel_1.default.findOne({ where: { email: email }, raw: true });
        if (existingUser) {
            return res.status(400).json({ message: "user already exist" });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const result = await userModel_1.default.create({
            username: username,
            email: email,
            password: hashedPassword,
            status: status,
            profile: consumers_1.blob,
            mobile_number: mobile_number,
            gender: gender,
            dob: dob,
            favoriteBook: favoriteBook
        });
        res.status(201).json({ user: result });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.signup = signup;
//login API
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel_1.default.findOne({ where: { email: email }, raw: true });
        if (!existingUser) {
            return res.status(404).json({ message: "user not found" });
        }
        const matchPassword = await bcrypt_1.default.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ email: existingUser.email, id: existingUser.id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(201).json({ message: "Logged in successfully", token: token });
        await sessionModel_1.default.create({
            uid: existingUser.id,
            isUserActive: true
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.login = login;
//logout API
async function logout(req, res) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const session = await sessionModel_1.default.findOne({ where: { user_id: userId } });
        if (!session) {
            return res.status(401).json({ message: "Session not found" });
        }
        await session.update({ isUserActive: false });
        res.status(200).json({ message: "Logout successful" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.logout = logout;
//getprofile API
async function getprofile(req, res) {
    try {
        let token = req.headers.authorization.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Invalid Token" });
        }
        else {
            const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
            const email = decoded.email;
            const getUserProfile = await userModel_1.default.findOne({ where: { email: email } });
            if (!getUserProfile) {
                return res.status(404).json({ message: "User profile not found" });
            }
            res.status(200).json(getUserProfile);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.getprofile = getprofile;
//deleteprofile API
async function deleteprofile(req, res) {
    try {
        let token = req.headers.authorization.split(" ")[1];
        console.log(token);
        if (!token) {
            res.status(401).json({ message: "Invalid Token" });
        }
        else {
            const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
            console.log(decoded);
            const email = decoded.email;
            const deleteUserProfile = await userModel_1.default.findOne({ where: { email: email } });
            if (!deleteUserProfile) {
                return res.status(404).json({ message: "User profile not found" });
            }
            await userModel_1.default.destroy({ where: { email: email } });
            res.status(200).json({ message: "user profile deleted successfully" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.deleteprofile = deleteprofile;
//update profile api
async function updateprofile(req, res) {
    try {
        let token = req.headers.authorization.split(" ")[1];
        console.log(token);
        if (!token) {
            res.status(401).json({ message: "Invalid Token" });
        }
        else {
            const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
            const email = decoded.email;
            const updateUserProfile = await userModel_1.default.findOne({ where: { email: email } });
            if (!updateUserProfile) {
                return res.status(404).json({ message: "User profile not found" });
            }
            const { username, password } = req.body;
            if (username) {
                updateUserProfile.username = username;
            }
            if (password) {
                const hashedPassword = await bcrypt_1.default.hash(password, 10);
                updateUserProfile.password = hashedPassword;
            }
            await updateUserProfile.save();
            res.status(200).json({ message: "User Profile updated successfully" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.updateprofile = updateprofile;
//forgot password api
async function forgetPassword(req, res) {
    try {
        const email = req.body.email;
        const favoriteBook = req.body.favoriteBook;
        const isEmailExist = await userModel_1.default.findOne({ where: { email: email } });
        if (!isEmailExist) {
            return res.status(404).json({ message: "email does not exist" });
        }
        const existingUser = await userModel_1.default.findOne({ where: { email: email }, raw: true });
        if (favoriteBook === existingUser.favoriteBook) {
            const token = jsonwebtoken_1.default.sign({ email: existingUser.email, id: existingUser.id }, SECRET_KEY, { expiresIn: '1h' });
            res.status(201).json({ message: "Logged in successfully", token: token });
            await sessionModel_1.default.create({
                uid: existingUser.id,
                isUserActive: true
            });
        }
        else {
            return res.status(404).json({ message: "security question failed!!" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}
exports.forgetPassword = forgetPassword;
//# sourceMappingURL=userController.js.map