const express = require('express');
// import {getPosts, createPost, deletePost, updatePost} from '../controllers/postController';
import {getPosts, createPost, deletePost, updatePost} from '../controllers/postController';
const auth = require("../middlewares/auth");
import { Request, Response } from "express";
const postRouter = express.Router();

postRouter.get("/post",auth, getPosts);  //get post

postRouter.post("/post",auth, createPost); //createpost -> the auth middleware will set the user_id and after that createPost will get execute

postRouter.delete("/:id",auth, deletePost);  //delete post - pass post_id in url

postRouter.put("/:id",auth, updatePost); //update post - pass post_id in url

// module.exports = postRouter;

export default postRouter;