const express = require('express');
const path = require('path');

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, 'static')));

const server = app.listen(port, () => {
  console.log(`DevHub is running on port ${port}`);
});