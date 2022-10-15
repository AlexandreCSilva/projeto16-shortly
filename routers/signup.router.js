import express from 'express';
import { SignUp } from '../controllers/signup.controller.js';
import { ValidateSignUp } from '../middlewares/signup.validation.js';

const signUpRouter = express.Router();

signUpRouter.post('/signup', ValidateSignUp, SignUp);

export { signUpRouter };