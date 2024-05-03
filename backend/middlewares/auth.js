const jwt = require('jsonwebtoken')
const jwtPass = require('../config')

const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(411).json({
            msg: "Invalid headers."
        })
    }

    const authToken = authHeader.split(" ")[1];

    try{
        const verify = jwt.verify(authToken, jwtPass)
        if(verify.userID){
            req.userID = verify.userID
            next();
        }
        else{
            return res.status(403).json({})
        }
    }
    catch{
        return res.status(403).json({
            msg: "Authentication error."
        })
    }
}

module.exports = authMiddleware
