const postsModel = require("../models/postsModel");
import { Request, Response } from "express";
const  auth =  require("../middlewares/auth"); // Import the auth middleware

export const createPost = (req: any, res: any) => {
    // console.log(req);
    console.log(req.userId);
}

// export const updatePost = (req, res) => {
    
// }

// export const deletePost = (req, res) => {
    
// }

// export const getPosts = (req, res) => {
    
// }

