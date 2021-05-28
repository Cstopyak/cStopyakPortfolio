require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

// middleware 
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))

// connecting to mongo db
const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
useCreateIndex:true,
useFindAndModify:false,
useNewUrlParser:true,
useUnifiedTopology:true  

},(err)=>{

    if (err) throw err;
    else{
        return console.log(`we are good to go in mongo db!!`);
    }



})


// bringing in the Routes


app.use('/contact', require('./server/routes/ContactRoute'));
app.use('/user', require('./server/routes/userRoutes'));
app.use('/' ,require('./server/routes/projectRoute'));
app.use('/', require('./server/routes/aboutRoute'));
app.use('/', require('./server/routes/upload'));
app.use('/' ,require('./server/routes/educationRoute'));





PORT =process.env.PORT || 5000;


// // static assets for deployment
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}




app.listen(PORT, ()=>{
    console.log(`server listening on port:${PORT}`);
})




