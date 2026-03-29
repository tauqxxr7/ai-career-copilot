const errorHandler = (err, req, res, next) => {
  console.error("❌ Server Error:", err.message);

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    suggestion: "Check API key configuration and Google AI Studio setup"
  });
};

module.exports = errorHandler;
