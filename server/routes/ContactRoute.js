require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    res.send('contacted')
})

router.post('/', (req, res) => {
    //setup for transporting messages or email

    let data =  req.body;
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        //port to connect
        port:465,
        //authentication
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        // tls:{
        //     rejectUnauthorized:false
        // }
    })
    let mailOptions = {
        from:data.email,
        to:'cstopyak23@gmail.com',
        subject:`Message from ${data.name}`,
        html:` <h3> Information </h3>
    <ul> 
        <li> Name: ${data.name}</li>
        <li> email: ${data.email}</li>
    </ul>
    <h3> Message </h3>
    <p>${data.message} </p>
    `
    }


    smtpTransport.sendMail(mailOptions, (err, response) => {
        try {
            if (err) return res.status(400).json({ msg: err })
            else {
                return res.status(200).json({ msg: `Message was sent!! Thank You!` })
            }
        } catch (err) {
            res.status(500).json({ msg: err })
        }

    })





});







module.exports = router;