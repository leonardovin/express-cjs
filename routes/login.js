var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

router.get('/', function (req, res, next) {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    // send the token
    res.send(jwt.sign({ id: 1 }, 'Secret', { expiresIn: "2 minutes" }));
  } else {
    res.status(401).send('Unauthorized');
  }
});


module.exports = router;
