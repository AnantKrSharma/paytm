const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const z = require('zod')

const authMiddleware = require('../middlewares/auth')
const { Account, Users } = require('../database/db')


// endpoint for user to get their account balance.
router.get('/balance', authMiddleware, async (req, res)=>{  
    try{
        const user = await Users.findOne({_id: req.userID})
        const userAccount = await Account.findOne({ userId: req.userID })
        
        res.status(200).json({
            balance: `₹ ${userAccount.balance}`,
            firstName: user.firstName,
            lastName: user.lastName
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
    to: z.string(),
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
        // transaction session in MongoDB:
        const session = await mongoose.startSession(); 
        session.startTransaction();

        const amount = req.body.amount;

        const senderAccount = await Account.findOne({ userId: req.userID })

        if(!senderAccount || senderAccount.balance < amount){
            await session.abortTransaction();  // abort

            return res.status(400).json({
                msg: "Insufficient balance."
            })
        }

        const recieverAccount = await Account.findOne({ userId: req.body.to })

        if(!recieverAccount){
            await session.abortTransaction();  // abort

            return res.status(400).json({
                msg: "Invalid account."
            })
        }

        // transfer
        await Account.updateOne({ userId: req.userID }, { $inc:{ balance: -amount } });
        await Account.updateOne({ userId: req.body.to }, { $inc: { balance: amount } });

        // commit the transaction. 
        await session.commitTransaction()
        
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
