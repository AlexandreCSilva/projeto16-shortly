import express from 'express';
import { SignIn } from '../controllers/signin.controller.js';
import { ValidateSignIn } from '../middlewares/signin.validation.js';

const signInRouter = express.Router();

signInRouter.post('/signin', ValidateSignIn, SignIn);

export { signInRouter };