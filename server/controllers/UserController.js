const bcrypt = require('bcrypt')
const jwt = require("jwt")

class UserController{
    static async signin(req,res,next){
        try {
            const {login, password} = req.body
            const user = await User.findOne({
                where: {login}
            })
            if (user){
                if (bcrypt.compareSync(password, user.password )){
                     res.json(Responder.ok({
                token: jwt.sign({login}, "secret", {expiresIn: '24h'})
                }))
                } else {
                    res.json({message: "некорректные данные"})
                }
            } else {
                res.json({message: "not found"})
            }
        } catch (e) {
            console.log(e.message);
            res.json(Responder.internal())  
        }
    }
    static async signup(req, res, next){
        try {
           const {login, password} = req.body
           await User.create({
            login,
            password: await bcrypt.hash(password, 5)
           })        
            res.json(Responder.ok({
                token: jwt.sign({login}, "secret", {expiresIn: '24h'})
            }))
        } catch (e) {
            console.log(e.message);
            res.json(Responder.internal())
               
        }
    }
}