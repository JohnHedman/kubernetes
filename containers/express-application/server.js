'use strict';

const express = require('express');
const jhedmanMath = require('./jhedman_math.js');

// Make sure this port is the same port you are exposing in the docker container
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Handle requests
app.get('/', (req, res) => {
  res.send('Hello World\n');
});


app.get('/test', (req, res) => {
  res.send('Hello this is a test!\n');
});

// User passes in number (:num) to our app and we
// will calculate the index value of the Fibonacci sequence
app.get('/fib/:num', (req, res) => {
  const index = req.params.num;
  console.log('Fib index passed in: ', index);

  console.time('Fib');
  const fibNum = jhedmanMath.getFibIndex(index);
  console.timeEnd('Fib');

  // Send response back
  res.send(fibNum.toString() + '\n');
});

app.get('/prime/:num', (req, res) => {
  const index = req.params.num;
  console.log('Prime index passed in: ', index);

  console.time('Prime');
  const primeNum = jhedmanMath.getPrimeIndex(index);
  console.timeEnd('Prime');

  // Send response back
  res.send(primeNum.toString() + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
