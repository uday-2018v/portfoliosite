const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "https://portfoliosite1-jxgy.onrender.com" }));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Global error handlers
process.on("uncaughtException", (err) => console.error("Uncaught Exception:", err));
process.on("unhandledRejection", (reason) => console.error("Unhandled Rejection:", reason));

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, error: "All fields are required" });

    await sgMail.send({
      to: process.env.ADMIN_EMAIL,
      from: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; padding:20px;">
          <h2 style="color:#333;">📩 New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f5f5f5; padding:10px; border-radius:5px;">
            ${message}
          </div>
          <hr />
          <small>Received on ${new Date().toLocaleString()}</small>
        </div>
      `,
      replyTo: email,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error.response ? error.response.body : error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Backend running on port ${PORT}`));
