import express from 'express';
import cors from 'cors';
import { signUpRouter } from './routers/signup.router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(signUpRouter);

app.listen(5000, () => console.log('Server On'));