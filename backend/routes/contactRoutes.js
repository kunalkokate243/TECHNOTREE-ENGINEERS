const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
  try {

    const { name, phone, email, company, subject, description } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Website Contact" <sales@technotree.com.au>`,
      to: "sales@technotree.com.au",
      subject: `New Contact Message: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Description:</b> ${description}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {

    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Email sending failed"
    });

  }
});

module.exports = router;