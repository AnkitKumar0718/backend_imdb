const express=require('express');
const router=express.Router();

const {login,logout,signup,deleteAllUsers}=require('../Controllers/userAuthController');

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.delete('/delete',deleteAllUsers)

module.exports=router;