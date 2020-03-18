'use strict';

const jhedmanMath = require('./jhedman_math.js');

var cmdArgs = process.argv.slice(2);
const index = cmdArgs[0];

if (index === undefined) {
    console.log("Error: No index was given in command line arguments!");
    process.exit(1);
}

const result = jhedmanMath.getPrimeIndex(index);
console.log("Value of the " + index.toString() + " index: " + result.toString());
