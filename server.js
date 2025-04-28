require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { seedDatabase, wipeAndReseed } = require("./utils/seed");

// Import routes
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courses");
const orderRoutes = require("./routes/orders");
const analyticRoutes = require("./routes/analytics");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/core-academy")
  .then(async () => {
    console.log("Connected to MongoDB");
    await seedDatabase();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic route
app.get("/api/", (req, res) => {
  res.json({ message: "Welcome to Core Academy API" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/analytics", analyticRoutes);

// Wipe all data and reseed
//TODO: add administator access
app.post("/api/wipe", async (req, res) => {
  try {
    const result = await wipeAndReseed();
    res.json({
      message: "Database wiped and reseeded successfully",
      ...result,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to wipe and reseed database" });
  }
});

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
