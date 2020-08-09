import app from './application';
const express = require('express');
const path = require('path');

const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 8000;

if (ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
