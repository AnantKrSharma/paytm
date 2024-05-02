const { Users } = require('./database/db');

const express = require('express')
const app = express();
app.use(express.json());

app.get('/signup', async (req, res)=>{
    
    await Users.create(
        {
            username: "  AN  ",
            firstName: "A",
            lastName: "K",
            password: "69420"
        }
    ).then(()=>{
        res.json({
            msg: `User created`
        })
    }).catch(()=>{
        res.json({
            msg: "Error, fuck off"
        })
    });
})

app.listen(3000, ()=>{
    console.log("Listening to 3000.");
})
