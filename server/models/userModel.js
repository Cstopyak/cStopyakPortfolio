const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "First name is required"]
    },
    
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,

    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, { timestamps: true })



module.exports = mongoose.model("user", userSchema);

