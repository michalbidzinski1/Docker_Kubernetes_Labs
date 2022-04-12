'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PGPORT;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log('Listening on port 5000');
});