import express from 'express';
import { SignUp } from '../controllers/signup.controller.js';
import { ValidateSignIn } from '../middlewares/signup.validation.js';

const signUpRouter = express.Router();

signUpRouter.post('/signup', ValidateSignIn, SignUp);

export { signUpRouter };