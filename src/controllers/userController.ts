const usersModel = require('../models/usersModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "posts_api";
import { Request, Response } from "express";

export const signup = async (req : Request, res: Response) => {
     //1 existing user check
     //2 hashed password
     //3 user creation
     //4 token generate

     const {username, email, password} = req.body;
     try{
        const existingUser = await usersModel.findOne({email : email});
        if(existingUser){
            return res.status(400).json({message: "User already exist"}); //bad request
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await usersModel.create({
            email: email,
            password: hashedPassword,
            username: username
        });

        const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY);
        res.status(201).json({user: result, token: token});
     }catch(error){
        console.log(error);
        res.status(500).json({message: "something went wrong"});
     }
}

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        const existingUser = await usersModel.findOne({email : email});
        if(!existingUser){
            return res.status(404).json({message: "User not found"}); //bad request
        }
    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if(!matchPassword){
        return res.status(400).json({message: "invalid Credentials"});
    }
    const token = jwt.sign({email: existingUser.email, id: existingUser._id}, SECRET_KEY);
    res.status(201).json({user: existingUser, token: token});
    console.log("login successful");
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

// module.exports = {signup, login};