const express = require('express')
const jwt = require('jsonwebtoken')
const z = require('zod');
const router = express.Router();
const jwtPass = require('../config')

const { Users, Account } = require('../database/db');
const authMiddleware = require('../middlewares/auth')


// sign-up zod schema
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

    try{
        const created = await Users.create(req.body)
        
        const idToken = jwt.sign({userID: created._id}, jwtPass)
        
        const account = await Account.create({
            userId: created._id,
            username: created.username, 
            balance: Math.floor(1 + Math.random()*1000
        )})
        
        res.status(200).json({
            msg: "User created succesfully",
            idToken
        })
    }
    catch{
        res.status(411).json({
            msg: "Error while Signing-up."
        })
    }
})


// sign-in zod schema
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
            msg: "Enter valid input."
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


// route to filter users on the basis of 'filter' being sent inside the query-parameter. 
router.get('/bulk', authMiddleware, async (req, res)=>{
    const filter = req.query.filter || ""

    const filtered = await Users.find({
        $or: [{
            firstName: {
                $regex: filter
            }
        },
        {
            lastName: {
                $regex: filter
            }
        }]
    })

    res.status(200).json({
        users: filtered.map((item)=> ({   //implicit return
            _id: item._id,
            firstName: item.firstName,
            lastName: item.lastName
        }))
    })
})




module.exports = router
