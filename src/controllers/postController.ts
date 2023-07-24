const postsModel = require("../models/postsModel");
import { Request, Response } from "express";
const  auth =  require("../middlewares/auth"); // Import the auth middleware

export const createPost = async (req: any, res: any) => {
    // console.log(req);
    
    const {image_URL, caption} = req.body;
    const uid = req.userId;

    // console.log(uid);
    const newPost = new postsModel({
        image_URL: image_URL,
        caption: caption,
        user_id: uid
    });

    try {
        await newPost.save();
        // console.log(req.userId)
        const posts = await postsModel.find({user_id : uid});
        res.status(201).json(newPost);
        // getPost();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

export const updatePost = async (req: any, res: any) => {
    const id = req.params.id;  //req.params.id -> post id which we are passing in req params
    const {image_URL, caption} = req.body;
    const uid = req.userId;

    const newPost = {
        image_URL: image_URL,
        caption: caption,
        user_id: uid
    }
    try {
        await postsModel.findByIdAndUpdate(id, newPost, {new: true});
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

export const deletePost = async (req: any, res: any) => {

    const id = req.params.id;  //req.params.id -> post id which we are passing in req params
    try {
        const post = await postsModel.findByIdAndRemove(id);
        res.status(202).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

export const getPosts = async (req: any, res: any) => {
    const uid = req.userId;
    try {
        const posts = await postsModel.find({user_id : uid});
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

