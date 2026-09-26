const appointmentRoutes = require("./routes/appointmentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    tls: true,
    serverSelectionTimeoutMS: 10000
})
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

mongoose.connection.on("error", (error) => {
    console.error("MongoDB runtime error:", error.message);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Sakthi Dental Clinic API is running!"
    });
});


// REST API test
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "REST API is working!"
    });
});
app.use("/api/appointments", appointmentRoutes);
app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});