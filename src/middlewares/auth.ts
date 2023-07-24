const jwt = require("jsonwebtoken");
const SECRET_KEY = "posts_api";
import { Request, Response } from "express";

const auth = (req:any, res:any, next:any) => {
    try {
        let token = req.headers.authorization;
        if(token){
            let token = req.headers.authorization;
            if(token){
                token = token.split(" ")[1];
                let user = jwt.verify(token, SECRET_KEY);
                // console.log(user);
                req.userId = user.id;
            }
        }else{
            res.status(401).json({message: "unauthorized user"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "unauthorized user"});
    }
}

module.exports = auth;