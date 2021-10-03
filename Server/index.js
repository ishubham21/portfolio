//user details object that would store the user details recieved through post request
let userDetails = {}
const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//importing the mail_config to send the emails
const sendMail = require('./mail_config/mail_config')

//making use of the express router
const routes = require('./routes')
app.use('/', routes);

//asking the express server to read text/plain also since it only process application/json by default
app.use(express.json({
    type: ['application/json', 'text/plain']
}))

//post request to send an email
app.post('/sendMail', urlencodedParser, (req, res) => {
    
    //sending the details recieved from the POST req as params 
    sendMail(req.body.userName, req.body.userEmail, req.body.userMsg)
    
    //sending a positive response upon completion
    res.status(200).send('Email sent')
})

app.listen(port, function () {
    console.log("Listening on port " + port);
});