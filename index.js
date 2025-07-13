const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("✅ LeadStrike AI Backend is running from index.js");
});

// Server listener
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
