module.exports = (req, res, next) => {
  if (req.headers['x-api-key'] === 'thisisapikey') {
    if (req.method === 'POST') {
      req.body = req.body || {};
      req.body.createdAt = new Date();
    }
    // Continue processing for all types of requests (not just POST)
    return next();
  } else {
    // Invalid API key, send 401 response and stop further execution
    return res.sendStatus(401);
  }
};
