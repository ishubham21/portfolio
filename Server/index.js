//user details object that would store the user details recieved through post request
let userDetails = {}
const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser')

//nodemailer setup
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()


//asking the express server to read text/plain also since it only process application/json by default
app.use(express.json({
    type: ['application/json', 'text/plain']
}))

//using body parser to fetch the body of the requests 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sendEmail = (userDetails) => {
    //configuring the gmail SMTP server using createTransport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    })

    let mailOptions = {
        from: 'ishubham2101@gmail.com',
        bcc: `${userDetails.userEmail}, sg2199203@gmail.com`,
        subject: 'Bonjour!',
        html: `Hey, ${userDetails.userName}! Thank you for contacting me. Your email has been recieved, and I will soon reply back. <br> Meanwhile, just to confirm, here are your details.  <br> <strong> Your Name </strong> - ${userDetails.userName} <br> <strong> Your Email </strong> - ${userDetails.userEmail} <br> <strong> Your Message </strong> - ${userDetails.userMsg}.`
    }

    transporter.sendMail(mailOptions)
        .then((res) => {
            console.log('Email is sent');
        })
        .catch((err) => {
            console.log('Error - ' + err);
        })
}

//post request to send an email
app.post('/sendMail', urlencodedParser, (req, res) => {
    sendEmail(req.body)
    res.send('Received the data')
})

//making use of the express router
const routes = require('./routes')
app.use('/', routes);

app.listen(port, function () {
    console.log("Listening on port " + port);
});