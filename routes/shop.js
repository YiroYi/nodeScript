const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
  res.send('<h1>Im Kripto shop Index</h1>');
});

module.exports = router;
