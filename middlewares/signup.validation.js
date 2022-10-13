import Joi from "joi";

const schemaSignIn = Joi.object({
    name: Joi.string()
        .min(1)
        .required(),

    email: Joi.string()
        .min(1)
        .email()
        .required(),

    password: Joi.string()
        .min(1)
        .required(),
    
    confirmPassword: Joi.string()
        .min(1)
        .required()
})   

function ValidateSignIn(req, res, next){
    const validation = schemaSignIn.validate(req.body, { abortEarly: false });
    
    if (validation.error) {
        console.log(validation.error.message);
        return res.sendStatus(422);
    } else if (req.body.password !== req.body.confirmPassword){
        console.log("The passwords doesn't match")
        return res.sendStatus(422);
    }

    // Quando tiver o banco verificar se o email ja não foi usado 409

    next();
}

export { ValidateSignIn };