#!/usr/bin/nodejs
// A script that prints a message depending on the arguments
const numArg = process.argv.length - 2;
if (numArg === 0) {
  console.log('No argument');
} else if (numArg === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
