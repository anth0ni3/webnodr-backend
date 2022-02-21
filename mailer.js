const nodemailer = require("nodemailer");

require("dotenv").config();

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  // host: "premium47.web-hosting.com",
  port: parseInt(process.env.EMAIL_PORT),
  // port: 465,
  secure: Boolean(parseInt(process.env.SMTP_SECURE)),
  // secure: true,
  // requireTLS: true,
  auth: {
    // user: process.env.AUTH_USER,
    user: "info@silvolcoin.com",
    // pass: process.env.AUTH_PASS,
    pass: "K(MbtOv97O#W",
  },
});

function sendEmail(data) {
  let mailOptions = {
    from: {
      name: process.env.SENDER_NAME,
      address: process.env.SENDER_ADDRESS,
    },
    to: process.env.RECEIVER_ADDRESS,
    subject: process.env.EMAIL_SUBJECT,
    html: data,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully" + data.response);
    }
  });
}

module.exports = sendEmail;
