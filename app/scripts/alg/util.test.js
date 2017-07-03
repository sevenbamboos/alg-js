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

/*
factorial - Returns a number that is the factorial of the given number.
factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720
*/
function testFactorial() {

}

export function testSuite() {
  testIsPrime();
}
