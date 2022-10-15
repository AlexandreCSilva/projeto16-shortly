import Joi from "joi";

const schemaSignIn = Joi.object({
    email: Joi.string()
        .min(1)
        .email()
        .required(),

    password: Joi.string()
        .min(1)
        .required(),
})   

function ValidateSignIn(req, res, next){
    const validation = schemaSignIn.validate(req.body, { abortEarly: false });
    
    if (validation.error) {
        console.log(validation.error.message);
        return res.sendStatus(422);
    }

    next();
}

export { ValidateSignIn };