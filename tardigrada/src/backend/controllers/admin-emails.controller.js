const express = require("express");
const nodemailer = require("nodemailer");

exports.sendFreeRequest = async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"server" <server@tardigradaschool.com>',
    to: "asafmalin@gmail.com",
    subject: "Request for free account",
    text: req.body.text,
  });

  console.log("Message sent: %s", info.messageId);

  res.status(200).json({
    msg: "Request sent!",
  });
};
