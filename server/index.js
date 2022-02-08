
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express()




import authRoutes from './routes/auth.js'

app.use(cors())
app.use(express.json())

app.use('/api',authRoutes)



const CONNECTION_URL = 'mongodb+srv://singhbraj:iambraj@cluster0.qcqmo.mongodb.net/UserDetail?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('DB is running'))
.catch((ERR)=>console.log(ERR.message,"Braj"));




app.listen(1337, () => {
	console.log('Server started on 1337')
})
