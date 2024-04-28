var jwt = require('jsonwebtoken');


const authJwtMiddleware = (req, res, next) => {
  console.log('Auth header:', req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No token provided!' });
  }
  const token = req.headers.authorization
  console.log('Token:', token);
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, 'Secret', (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Not authorized!' });
    }
    req.userId = decoded.id;
    next();
  }
  );
};

module.exports = authJwtMiddleware;