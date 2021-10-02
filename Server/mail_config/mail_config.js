//nodemailer and the environment config setup
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

//exporting the funtion to be made available globally
module.exports = async (name, email, msg) => {

    //configuring the gmail SMTP server using createTransport 
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    })

    //mail content that is to be sent to the contact
    let mailOptions = {
        from: 'ishubham2101@gmail.com',
        bcc: `${email}, sg2199203@gmail.com`,
        subject: 'Bonjour!',
        html: `Hey, ${name}! Thank you for contacting me. Your email has been recieved, and I will soon reply back. <br> Meanwhile, just to confirm, here are your details.  <br> <strong> Your Name </strong> - ${name} <br> <strong> Your Email </strong> - ${email} <br> <strong> Your Message </strong> - ${msg}.`
    }

    //sendMail function to for final sending of messages
    await transporter.sendMail(mailOptions)
        .then(() => {
            console.log('Email is sent');
        })
        .catch((err) => {
            console.log('Error - ' + err);
        })
}