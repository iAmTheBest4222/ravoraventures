const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/ravorav-apply
router.post('/ravorav-apply', async (req, res) => {
  const data = req.body;
  if (!data.email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Save data (mock: just log)
  console.log('Ravorav application received:', data);

  // Send confirmation email
  try {
    // Configure transporter (use env vars in production)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'RavoraV Application Confirmation',
      html: `<h2>Thank you for applying!</h2>
        <p>Dear ${data.representativeName || 'Applicant'},</p>
        <p>We have received your application for RavoraV. Here is a summary:</p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
        <p>We appreciate your interest. Our team will review your submission and get in touch soon.</p>
        <br><p>Best regards,<br>Ravora Ventures Team</p>`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send confirmation email' });
  }
});

module.exports = router;
