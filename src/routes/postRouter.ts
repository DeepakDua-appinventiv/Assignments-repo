const express = require('express');
// import {getPosts, createPost, deletePost, updatePost} from '../controllers/postController';
import {createPost} from '../controllers/postController';
const auth = require("../middlewares/auth");
import { Request, Response } from "express";
const postRouter = express.Router();

// postRouter.get("/",auth, getPosts);  //get post

postRouter.post("/post",auth, createPost); //createpost

// postRouter.delete("/:id", deletePost);  //delete post - pass post_id in url

// postRouter.put("/:id", updatePost); //update post - pass post_id in url

// module.exports = postRouter;

export default postRouter;