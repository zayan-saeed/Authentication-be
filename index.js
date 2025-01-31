require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


const startServer = async () => {
    try {
        // Connect to database
        await connection();

        // middlewares
        app.use(express.json());
        app.use(cors());

        // routes
        app.use("/api/users", userRoutes);
        app.use("/api/auth", authRoutes);

        const port = process.env.PORT || 8080;
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();