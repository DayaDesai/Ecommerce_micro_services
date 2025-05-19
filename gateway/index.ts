import express from "express";
import proxy from "express-http-proxy";

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------- Proxy Services --------
app.use("/api/auth", proxy("http://localhost:8081"));
app.use("/api/messages", proxy("http://localhost:8082"));
app.use("/api/notifications", proxy("http://localhost:8083"));
app.use("/api/payments", proxy("http://localhost:8084"));
app.use("/api/store", proxy("http://localhost:8085"));
app.use("/api/files", proxy("http://localhost:8086"));
app.use("/api/admin", proxy("http://localhost:8087"));

// -------- Check Route --------
app.get("/test", (req, res) => {
    res.status(200).json({ status: "Gateway is up and running" });
});

// -------- Start the Gateway Server --------
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`🚀 Gateway is listening on port ${PORT}`);
});

// -------- Graceful Shutdown Handling --------
const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info("🔒 Gateway server closed gracefully");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

// -------- Global Error Handlers --------
const unexpectedErrorHandler = (error: unknown) => {
    console.error("❌ Unexpected Error:", error);
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
