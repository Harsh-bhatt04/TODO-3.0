import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
import tasks from './routes/routes.js'


const app = express()

// console.log(process.env)


//  here because for creating or inserting block in a blockchain we need private key but here on the server side we cannot give it
app.use(express.json())
app.use(cors());

app.use('/api/ethereum',tasks)


console.log(process.env.PORT)
app.listen(process.env.PORT || 3000,()=> console.log("Server is running..."))
