module.exports = (err, req, res, next) => {
  console.error("❌ ERROR:", err.message);

  res.status(500).json({
    success: false,
    error: err.message || "Something went wrong"
  });
};