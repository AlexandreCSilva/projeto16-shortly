import bcrypt from 'bcrypt';

function SignUp (req, res) {
    const passwordHash = bcrypt.hashSync(req.body.password, 10);

    delete req.body.password;
    delete req.body.confirmPassword;

    console.log({...req.body, password: passwordHash})
    res.sendStatus(201);
}

export { SignUp };