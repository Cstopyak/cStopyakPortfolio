const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if(!token){
            return res.status(500).json({msg: "Invalid authorization"})
        }

        jwt.verify(token, process.env.SECRET_KEY, (err,user)=>{


            if(err){
                return res.status(400).json({msg:"authorization not valid"})
            }
            req.user = user;
            next();
        })



    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


module.exports = auth;

// module.exports.authenticate = (req, res, next) => {
//     jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
//         console.log("any body out there?")
//         if (err) {
//             res.status(401).json({ verified: false });
//         } else {
//             next();
//         }
//     });
// }