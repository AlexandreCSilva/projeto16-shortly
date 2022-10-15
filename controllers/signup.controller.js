import bcrypt from 'bcrypt';
import { dataBase } from '../database/database.js';

async function SignUp (req, res) {
    const passwordHash = bcrypt.hashSync(req.body.password, 10);

    delete req.body.password;
    delete req.body.confirmPassword;

    await dataBase.query(
        'INSERT INTO users ("name", "email", "password") VALUES ($1, $2, $3)',
        [req.body.name, req.body.email, passwordHash]
    );
    
    res.sendStatus(201);
}

export { SignUp };