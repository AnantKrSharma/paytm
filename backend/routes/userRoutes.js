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

    Users.create(req.body)
        .then((created)=>{  
            const token = jwt.sign({
                userID: created._id
            }, jwtPass)
            
            res.status(200).json({
                msg: "User created succesfully",
                token
            })
        })
        .catch(()=>{
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
    const {success} = signinSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg:"Enter valid input."
        })
    }

    const exists = await Users.findOne(req.body)

    if(exists){
        const idToken = jwt.sign({userID: exists._id}, jwtPass)

        return res.status(200).json({
            msg: "Signed in successfully.",
            idToken
        })
    }

    return res.status(411).json({
        msg:"Couldn't find user."
    })
})


// update data zod schema
const updateSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().optional()
})

router.put('/', authMiddleware, (req, res)=>{
    const {success} = updateSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg: "Invalid inputs."
        })
    }
    
    Users.updateOne({
        _id: req.userID
    }, req.body)
    .then(()=>{
        res.status(200).json({
            msg: "Updated successfully."
        })
    })
    .catch(()=>{
        res.status(411).json({
            msg: "Error while updating."
        })
    })
    
})




module.exports = router
