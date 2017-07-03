import * as util from './util';

function assert(expected, actual) {
  if (expected == actual) {
    return;
  } else {
    throw Error(`expect ${expected}, but was ${actual}`);
  }
}

function testIsPrime() {
  assert(false, util.isPrime(0));
  assert(true, util.isPrime(2));
  assert(true, util.isPrime(17));
  assert(false, util.isPrime(10000000000000));

  console.info("[testIsPrime] passed");
}

function testFactorial() {
  assert(1, util.factorial(0));  
  assert(1, util.factorial(1));  
  assert(720, util.factorial(6));  

  console.info("[testFactorial] passed");
}

function testFib() {
  assert(0, util.fib(0));
  assert(1, util.fib(1));
  assert(55, util.fib(10));
  assert(6765, util.fib(20));
  assert(12586269025, util.fib(50));

  console.info("[testFib] passed");
}

export function testSuite() {
  testIsPrime();
  testFactorial();
  testFib();
}
