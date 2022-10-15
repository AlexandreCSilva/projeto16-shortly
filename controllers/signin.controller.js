import bcrypt from 'bcrypt';
import { dataBase } from '../database/database.js';

async function SignIn (req, res) {

    const users = await dataBase.query(
        'SELECT * FROM users WHERE email = $1',
        [req.body.email]
    );

    if (users.rows.length === 0){
        return res.sendStatus(401);
    }

    const passwordMatch = await bcrypt.compare(req.body.password, users.rows[0].password);

    if (!passwordMatch){
        return res.sendStatus(401);
    }

    res.sendStatus(200);
}

export { SignIn };