var express = require("express");
const nodemailer = require("nodemailer");
var router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.PASSWORD_REACTPORTFOLIO,
  },
});

router.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `message de ${name}`,
    html: `
      <h1>message de ${name}</h1>
      <p style="font-size: 16px;">${message}</p>
      <p>email: ${email}</p>
      <footer style="font-style: italic; color: #555;">
        <p>Merci de nous avoir contactés !</p>
        <p>Cordialement, <br>David Stevenoot</p>
      </footer>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
    } else {
      console.log("Email envoyé : " + info.response);
      res.status(200).json({ message: "Email envoyé avec succès !" });
    }
  });
});

module.exports = router;
