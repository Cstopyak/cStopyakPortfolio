const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const auth = require('../configs/auth');


//make sure everything is spelled correctly other wise you will get useSchema undefined in postman
const userController = {


    registerUser: async (req,res) =>{
        
        const { username, email, password} = req.body;

        try {
            

            const user = await userSchema.findOne({email:email});
        if(user){
            return res.status(400).json({msg:"Email exists please input a new one"})
        }
        

        //creating bcrypt password
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new userSchema({
            username:username,
            email:email,
            password:passwordHash
    })

    await newUser.save();
    res.json({msg:"register Completed"})



        } catch (error) {
            return res.status(500).json({msg:error.message})
        }


    },

    loginUser: async (req,res) =>{
        // res.send('login user completed');

        try {
            const {email, password} = req.body;
            const user = await userSchema.findOne({email:email})
            if(!user){
                return res.status(400).json({msg:"user doesnt not exist"})
            }

            const matching = await bcrypt.compare(password, user.password);

            if(!matching){
                return res.status(400).json({msg: "incorect password"})
            }

            //if login is done correctly
            const payload={
                id: user.id,
                name: user.username
            }

            const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:"1d"} )
            res.json({token})




        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    veryifiedToken: async (req,res) =>{
        // res.json(req.user);
        try {
            
            const token = req.header("Authorization")
            if(!token)return res.send(false)
            jwt.verify(token, process.env.SECRET_KEY, async(err, verified)=>{
                if(err) return res.send(false)

                const user = await userSchema.findById(verified.id)
                if(!user) return res.send(false)

                return res.send(true)
            }) //if this works correctly instead of seeing username pass on the user/verify, you will see true.




        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
        
    }




}

module.exports = userController;