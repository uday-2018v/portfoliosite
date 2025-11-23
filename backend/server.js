const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/contact", (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Create folder if it doesn't exist
    const folderPath = path.join(__dirname, "messages");
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // 2️⃣ Generate unique file name
    const fileName = `contact_${Date.now()}.txt`;
    const filePath = path.join(folderPath, fileName);

    // 3️⃣ Content for file
    const fileContent =
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nDate: ${new Date().toLocaleString()}\n`;

    // 4️⃣ Create the file
    fs.writeFileSync(filePath, fileContent);

    return res.json({
      success: true,
      message: "TXT file created successfully!",
      file: fileName,
    });

  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
