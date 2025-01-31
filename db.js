const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            ssl: true,
            tls: true,
            retryWrites: true,
            w: 'majority',
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
        // Retry logic
        console.log("Retrying connection in 5 seconds...");
        setTimeout(connectDB, 5000);
    }
};

module.exports = connectDB;