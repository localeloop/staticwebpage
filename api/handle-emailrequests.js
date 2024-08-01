const nodemailer = require('nodemailer');

function main = async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: '"Your Website" <noreply@thequeensheadfarnham.co.uk>',
      to: "thequeensheadfarnham@gmail.com",
      subject: "-- WEBSITE -- Contact form submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};