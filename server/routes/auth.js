import express from 'express';
const router = express.Router();
import {registerUser,loginUser,getQuote,postQuote} from '../controllers/auth.js';



router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/quote',getQuote)
router.post('/quote',postQuote)



export default router;
