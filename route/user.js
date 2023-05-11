const express=require('express')
const router=express.Router();
const user=require('../controller/userController')

router.get('/',user.home);
router.post('/userSubmit',user.userSubmit);
module.exports=router