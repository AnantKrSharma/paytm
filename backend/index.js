const express = require('express')
const cors = require('cors')
const app = express();

const mainRouter = require('./routes/main')

app.use(express.json());

const allowedOrigins = ['https://deploy-mern-1whq.vercel.app', 'http://localhost:5173'];

app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST', 'GET', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors());

app.use('/api/v1', mainRouter)

app.listen(3000, ()=>{
    console.log("Listening to 3000.");
})
