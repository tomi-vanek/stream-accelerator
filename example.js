'use strict';

// This example uses following dependencies (to be added to package.json):
//   "dependencies": {
//     "pump": "^1.0.2",
//     "split2": "^2.1.1",
//     "through2-map": "^3.0.0"
//   }

const readFromFile = require('fs').createReadStream;
const writeToFile = require('fs').createWriteStream;
const splitToLines = require('split2');
const execute = require('pump');
const transform = require('through2-map');

const accelerate = require('./stream-accelerator.js');

const input = './LICENSE';
const result = './LICENSE.csv';

console.log(`transforming ${input} to ${result}`);
execute(
  readFromFile(input),
  splitToLines(),
  transform(chunk => chunk.toString().split(' ').join(',').replace(',,', ',\\,,') + '\n'),
  accelerate(10000, 100),
  writeToFile(result),
  err => console.error(err)
);
