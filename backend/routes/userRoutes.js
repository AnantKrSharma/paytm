const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPass = require('../config')
const z = require('zod');
const router = express.Router();

const { Users } = require('../database/db');
const JWT_PASS = require('../config');
const authMiddleware = require('../middlewares/auth')

//zod sign-up schema
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
            message: "User already exists."
        })
    }

    Users.create(req.body).then((created)=>{  
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

//zod sign-in schema
const signinSchema = z.object({
    username: z.string().email(),
    password: z.string()
})


router.post('/signin', async (req, res)=>{

    const { success } = signinSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg: "Enter valid input."
        })
    }

    const exists = await Users.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(exists){
        const usernameToken = jwt.sign({
            userID: exists._id
        }, JWT_PASS)
        
        res.status(200).json({
            msg:"Signed in succesfully.",
            usernameToken
        })
        return;
    }
    
    res.status(411).json({
        msg: "Couldn't find user."
    })
})


router.get('/authentication', authMiddleware, async (req, res)=>{
    const found = await Users.findOne({_id: req.userID})
    
    res.json({
        found
    })
} )

module.exports = router
