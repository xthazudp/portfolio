const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(process.cwd(), 'build')));

app.get('/', function (req, res, next) {
  res.sendFile(path.join(process.cwd(), 'build/index.htm'));
});

app.listen(process.env.PORT || 5000, function (err, done) {
  if (!err) {
    console.log('server listening..', process.env.PORT);
  }
});
