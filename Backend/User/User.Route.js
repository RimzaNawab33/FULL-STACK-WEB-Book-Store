import express from 'express';
import { SignUp, LogIn } from './User.Controller.js';

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", LogIn);



export default router;