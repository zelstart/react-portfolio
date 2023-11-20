const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());  
app.use(express.json());

console.log("Email:", process.env.EMAIL);
console.log("Password:", process.env.PASSWORD ? "Password is set" : "Password is not set");

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: 'startzel.a@gmail.com',
        subject: `New message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Email sent' });
        }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});