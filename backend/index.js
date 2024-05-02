const express = require('express')
const cors = require('cors')
const app = express();

const mainRouter = require('./routes/main')

app.use(express.json());
app.use(cors())

app.use('/api/v1', mainRouter)

app.listen(3000, ()=>{
    console.log("Listening to 3000.");
})
