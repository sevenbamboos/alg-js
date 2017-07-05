import * as util from './util';

function assert(expected, actual, message) {
  if (expected == actual) {
    return;
  } else {
    throw Error(message || `expect ${expected}, but was ${actual}`);
  }
}

function assertArray(expected, actual) {
  if (expected === actual) {
    return;

  } else if (expected.length != actual.length) {
    throw Error(`expect array length ${expected.length}, but was ${actual.length}`);

  } else {

    for (var i = 0; i < expected.length; i++) {
      assert(expected[i], actual[i], `expect ${expected[i]} at position ${i}, but was ${actual[i]}`);
    }
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

function testIsSorted() {
  assert(true, util.isSorted([]));
  assert(true, util.isSorted([-Infinity, -5, 0, 3, 9]));
  assert(false, util.isSorted([3, 9, -3, 10]));

  console.info("[testIsSorted] passed");
}

function testFilter() {
  assertArray([1, 2, 3, 4], util.filter([1, 2, 3, 4]));
  assertArray([1, 2], util.filter([1, 2, 3, 4], n => n < 3));

  console.info("[testFilter] passed");
}

function testReduce() {
  assert(10, util.reduce([1,2,3,4], (a,b)=>a+b, 0));

  console.info("[testReduce] passed");
}

function testReverse() {
  assert('', util.reverse(''));
  assert('fedcba', util.reverse('abcdef'));

  console.info("[testReverse] passed");
}

function testIndexOf() {
  assert(0, util.indexOf([1, 2, 3], 1));
  assert(-1, util.indexOf([1, 2, 3], 4));

  console.info("[testIndexOf] passed");
}

function testIsPalindrome() {
  assert(true, util.isPalindrome(''));
  assert(true, util.isPalindrome('abcdcba'));
  assert(false, util.isPalindrome('abcd'));
  assert(true, util.isPalindrome('A man a plan a canal Panama'));

  console.info("[testIsPalindrome] passed");
}

export function testSuite() {
  testIsPrime();
  testFactorial();
  testFib();
  testIsSorted();
  testFilter();
  testReduce();
  testReverse();
  testIndexOf();
  testIsPalindrome();
}
