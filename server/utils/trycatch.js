const Trycatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
};

module.exports = Trycatch;