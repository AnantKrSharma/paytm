const express = require('express')
const router = express.Router()
const z = require('zod')

const authMiddleware = require('../middlewares/auth')
const { Account } = require('../database/db')

// endpoint for user to get their account balance.
router.get('/balance', authMiddleware, async (req, res)=>{  
    try{
        const userAccount = await Account.findOne({userId: req.userID})
        
        res.status(200).json({
            balance: `₹ ${userAccount.balance}`
        })
    }
    catch{
        res.status(411).json({
            msg: "Error while accessing account."
        })
    }
})


//zod schema for money-transfer endpoint
const transferSchema = z.object({
    to: z.string().email(),
    amount: z.number()
}) 

// endpoint for user to transfer money to another account.
router.post('/transfer', authMiddleware, async (req, res)=>{
    const {success} = transferSchema.safeParse(req.body)
    
    if(!success){
        return res.status(411).json({
            msg: "Enter valid inputs."
        })
    }

    try{
        const amount = req.body.amount;

        await Account.updateOne({
            userId: req.userID
         },
         {
            $inc:{
                balance: -amount
            }
        });

        await Account.updateOne({
            username: req.body.to
         }, 
         {
            $inc: {
                balance: +amount
            }
        });

        res.status(200).json({
            msg: "Transfer successful"
        });

    }
    catch{
        res.status(411).json({
            msg: "Error while transfering money."
        });
    }
})


module.exports = router
