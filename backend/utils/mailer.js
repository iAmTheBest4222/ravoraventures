const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your gmail address
    pass: process.env.EMAIL_PASS  // your gmail app password
  }
});

async function sendContactEmail({ name, email, company, type, message }) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'divyanshu.mishra_cs22@gla.ac.in',
    subject: `New Contact Form Submission: ${type}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nType: ${type}\nMessage: ${message}`
  };
  await transporter.sendMail(mailOptions);
}

module.exports = { sendContactEmail };
