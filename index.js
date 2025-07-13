const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// JSON parsing & CORS middleware
app.use(express.json());
app.use(cors());

// Health‑check route
app.get("/", (req, res) => {
  res.send("🚀 LeadStrike AI Backend is running from index.js");
});

// Dummy search endpoint
app.post("/search", (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }
  // Demo data — बाद में यहाँ असली लॉजिक लगाएंगे
  const demoResults = [
    { name: "ABC Technologies", email: "contact@abctech.com", phone: "+91-9999999999" },
    { name: "XYZ Solutions",   email: "info@xyz.com",        phone: "+91-8888888888" }
  ];
  res.json({ query, results: demoResults });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
