'use strict';

const logable = (fn) => (...args) => {
  const res = fn(...args);
  const callArgs = args.join(', ');
  const callLog = `${fn.name}(${callArgs})`;
  console.log(`Call: ${callLog} Result: ${res}`);
  return res;
};

// Usage

const sum = (a, b) => a + b;

const logableSum = logable(sum);
const a = logableSum(3, 5);
const b = logableSum(7, 2);
const c = logableSum(1, -1);
console.dir({ a, b, c });
