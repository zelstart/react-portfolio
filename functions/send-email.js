// functions/send-email.js
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `New message from ${name}`,
    text: message
  };

  // send mail
  let info = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({message: "Email sent", info: info})
  };
};