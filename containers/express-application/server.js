'use strict';

const express = require('express');

// Make sure this port is the same port you are exposing in the docker container
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Handle requests
app.get('/', (req, res) => {

  res.send('Hello World');

});

app.get('/test', (req, res) => {
  res.send('Hello this is a test!');
  
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);