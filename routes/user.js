const express = require("express");
const path = require('path');
const nodemailer = require("nodemailer");

const router = express.Router();

router.use(express.static('views'))

router.get("/", (req, res) => {
    res.sendFile(`${__dirname}./views/index.html`);

});

let transporter = nodemailer.createTransport({
    host: "mail.ipankaj.me",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "pankajthecoder@ipankaj.me", // generated ethereal user
        pass: "Woh1@Lamhe" // generated ethereal password
    }
});


router.post("/",  async (req, res) => {
    console.log(req.body);
    var name = req.body.name;
    var personalemail = req.body.email;
    var subj = req.body.subject;
    var msg = req.body.message;
    res.send("files are uploaed to your database..")
    //res.redirect('https://wa.me/?text=Im%20inquiring%20about%20the%20apartment%20listing');
    //res.redirect('https://wa.me/916305926048?text=The message : ${message} with subject : ${subject} has send to the mentioned email')
    console.log(name, personalemail, subj, msg);
        let testAccount = await nodemailer.createTestAccount();
        let info = await transporter.sendMail({
            from: 'pankajthecoder@ipankaj.me', // sender address
            to: personalemail, // list of receivers
            subject: subj, // Subject line
            // text: "msg", // plain text body
            html: `${msg}`// html body
        });
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou..


});





module.exports = router