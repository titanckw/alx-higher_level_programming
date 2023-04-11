#!/usr/bin/node
// A script that prints the first argument
const firstArg = process.argv[2];
if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log('Argument was found');
}
