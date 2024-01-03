export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server message";

  return res.status(404).json({ success: false, message: err.message });
};
