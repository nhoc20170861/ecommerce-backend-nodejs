import app from "./src/app.js"

const PORT = process.env.SERVER_PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`Webserver eCommerce start with ${PORT}`)
})

process.on("SIGINT", () => {
    server.close(() => console.log("Exist Server Express"))
})
function gracefulShutdown(signal) {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  // stop accepting new connections
  server.close(async () => {
    try {
      // close DB connection if applicable (e.g., mongoose)
      // await mongoose.disconnect();
      console.log("Closed out remaining connections.");
      process.exit(0);
    } catch (err) {
      console.error("Error during shutdown:", err);
      process.exit(1);
    }
  });

  // Force exit if graceful shutdown takes too long
  setTimeout(() => {
    console.error("Forcing shutdown after timeout.");
    process.exit(1);
  }, 10000);
}

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  gracefulShutdown("uncaughtException");
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
  gracefulShutdown("unhandledRejection");
});