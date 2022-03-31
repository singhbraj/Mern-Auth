
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express()
dotenv.config();




import authRoutes from './routes/auth.js'

app.use(cors())
app.use(express.json())

app.use('/api',authRoutes)


const CONNECTION_URL = process.env.MONGODB_URL;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('DB is running'))
.catch((ERR)=>console.log(ERR.message,"Braj"));


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server started on ${PORT} `)
})
