const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Im Yiro');
  next();
});

app.use((req, res, next) => {
  console.log('Im Kripto');
  res.send('<h1>Im Kripto</h1>');
});

app.listen(3000);
