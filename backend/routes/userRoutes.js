const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPass = require('../config')
const z = require('zod');

const router = express.Router();
const { Users } = require('../database/db');

//zod schema
const signupSchema = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
})  


router.post('/signup', async (req, res)=>{
    const validateSignup = signupSchema.safeParse(req.body)
    
    if(!validateSignup.success){
        return res.status(411).json({
            message: "Incorrect inputs."
        })
    }

    const existingUser = await Users.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken."
        })
    }

    await Users.create(req.body).then((created)=>{  
        const userId = created._id
        const token = jwt.sign({
            userId
        }, jwtPass)
        
        res.status(200).json({
            msg: "User created succesfully",
            token
        })
    }).catch(()=>{
        res.status(411).json({
            msg: "Document error occured."
        })
    })
})


module.exports = router
