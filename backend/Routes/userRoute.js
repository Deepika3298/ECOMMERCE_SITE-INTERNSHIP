const express= require('express');
const router= express.Router();
const {registerUser}= require('../Controller/userController')

router.route("/register").post(registerUser);

module.exports=router;