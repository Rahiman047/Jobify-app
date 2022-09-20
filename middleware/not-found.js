const notFoundMiddleware = (req, res) =>
  res.status(401).send(`Route does not exist`);

export default notFoundMiddleware;
