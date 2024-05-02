const { Users } = require('./database/db');

const express = require('express')
const app = express();
app.use(express.json());



app.listen(3000, ()=>{
    console.log("Listening to 3000.");
})
