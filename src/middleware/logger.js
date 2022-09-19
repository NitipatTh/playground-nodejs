function logger(req, res, next) {
    console.log(`[LOGGER]: Requesting to ${req.method} ${req.url}`);
    next();
};

module.exports = logger;