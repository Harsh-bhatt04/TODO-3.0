import express from 'express'
import cors from 'cors'
import tasks from './routes/routes.js'
const app = express()


//  here because for creating or inserting block in a blockchain we need private key but here on the server side we cannot give it
app.use(express.json())
app.use(cors());

app.use('/api/ethereum',tasks)



app.listen(3000,()=> console.log("Server is running..."))
