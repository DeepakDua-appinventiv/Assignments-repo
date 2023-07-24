/**
 * @swagger
 * /login:
 * post:
 *      summary: This api is used to check if post api is working or not
 *      description: This api is used to check if post api is working or not
 *      responses:
 *          201:
 *              description: To test post method 
 *      
 */

const express = require('express');
// const { signup, login } = require("../controllers/userController");
import {signup, login} from '../controllers/userController';
// import {createPost} from '../controllers/postController';
const router = express.Router();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

router.post("/signup", signup)
router.post("/login", login)

export default router;