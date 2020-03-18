
// Library full of poorly optimized algorithms to test out kubernetes scaling based on cpu and memory

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

module.exports = {
  getPrimeIndex,
  getFibIndex,
};
