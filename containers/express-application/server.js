'use strict';

const express = require('express');

// Make sure this port is the same port you are exposing in the docker container
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


/**
 * This function is meant to use large amounts of cpu and
 * memory to show how kubernetes scales
 * @param {number} num The index to find Fibonacci for
 * @return {number} The value of the Fibonacci index
 */
function getFibIndex(num) {
  if (num < 1) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  }

  // In Javascript a mutation, fibArray.push() does not count
  // as reassignment, so this can be const.
  const fibArray = [1, 1];
  for (let x = 2; x < num; x++) {
    fibArray.push(fibArray[x - 1] + fibArray[x - 2]);
  }

  return fibArray[num - 1];
}

/**
 * Finds the prime number of a given index
 * This is done slowly to simulate tiling processing
 * @param {number} num The index to search for
 * @return {number} The value of the given index, returns -1 if error is found
 */
function getPrimeIndex(num) {
  if (num < 1) {
    return -1;
  }

  // This is meant to increase (waste) the memory usage from the program
  const memoryWaste = [];
  if (num >= 10000) {
    for (let m = 0; m < 100000000; m++) {
      memoryWaste.push(m);
    }
  }

  const primeNumbers = [];

  for (let x = 2; x < Infinity; x++) {
    let isPrime = true;
    const notDiv = [];
    for (let y = 2; y < x; y++) {
      if (x % y === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      const length = primeNumbers.push(x);
      if (length >= num) {
        break;
      }
    }
  }

  // Not sure if garbage collection is smart enough to free the
  // array memory so I added this to make sure it doesn't
  memoryWaste.push(1);
  return primeNumbers[num - 1];
}

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
  const fibNum = getFibIndex(index);
  console.timeEnd('Fib');

  // Send response back
  res.send(fibNum.toString() + '\n');
});

app.get('/prime/:num', (req, res) => {
  const index = req.params.num;
  console.log('Prime index passed in: ', index);

  console.time('Prime');
  const primeNum = getPrimeIndex(index);
  console.timeEnd('Prime');

  // Send response back
  res.send(primeNum.toString() + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);