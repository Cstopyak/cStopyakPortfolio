const router = require('express').Router();
const userController= require('../controllers/userController');
const auth = require('../configs/auth');

   
        router.post("/register", userController.registerUser);

        router.post("/login", userController.loginUser);
        // app.post("/login", loginRegController.login);
        
        
        router.get("/verify", userController.veryifiedToken);
        


    module.exports = router;