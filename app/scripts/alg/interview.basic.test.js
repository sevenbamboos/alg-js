import { info, assert, assertArray, } from './util';

import {
  isPrime, factorial, fib, isSorted, filter, reduce, reverse, 
  isPalindrome, indexOf, missing, isBalanced,
} from './interview.basic';

function testIsPrime() {
  assert(false, isPrime(0));
  assert(true, isPrime(2));
  assert(true, isPrime(17));
  assert(false, isPrime(10000000000000));

  info("[testIsPrime] passed");
}

function testFactorial() {
  assert(1, factorial(0));  
  assert(1, factorial(1));  
  assert(720, factorial(6));  

  info("[testFactorial] passed");
}

function testFib() {
  assert(0, fib(0));
  assert(1, fib(1));
  assert(55, fib(10));
  assert(6765, fib(20));
  assert(12586269025, fib(50));

  info("[testFib] passed");
}

function testIsSorted() {
  assert(true, isSorted([]));
  assert(true, isSorted([-Infinity, -5, 0, 3, 9]));
  assert(false, isSorted([3, 9, -3, 10]));

  info("[testIsSorted] passed");
}

function testFilter() {
  assertArray([1, 2, 3, 4], filter([1, 2, 3, 4]));
  assertArray([1, 2], filter([1, 2, 3, 4], n => n < 3));

  info("[testFilter] passed");
}

function testReduce() {
  assert(10, reduce([1,2,3,4], (a,b)=>a+b, 0));

  info("[testReduce] passed");
}

function testReverse() {
  assert('', reverse(''));
  assert('fedcba', reverse('abcdef'));

  info("[testReverse] passed");
}

function testIndexOf() {
  assert(0, indexOf([1, 2, 3], 1));
  assert(-1, indexOf([1, 2, 3], 4));

  info("[testIndexOf] passed");
}

function testIsPalindrome() {
  assert(true, isPalindrome(''));
  assert(true, isPalindrome('abcdcba'));
  assert(false, isPalindrome('abcd'));
  assert(true, isPalindrome('A man a plan a canal Panama'));

  info("[testIsPalindrome] passed");
}

function testMissing() {
  assert(undefined, missing([]));
  assert(2, missing([1, 4, 3]));
  assert(1, missing([2, 3, 4]));
  assert(3, missing([5, 1, 4, 2]));
  assert(undefined, missing([1, 2, 3, 4]));

  info("[testMissing] passed");
}

function testIsBalanced() {
  assert(true, isBalanced('foo { bar { baz } boo }'));
  assert(false, isBalanced('foo { bar { baz }'));
  assert(false, isBalanced('foo { bar } }'));
  
  info("[testIsBalanced] passed");
}

export function testSuite() {
  info("*** basic ***");
  testIsPrime();
  testFactorial();
  testFib();
  testIsSorted();
  testFilter();
  testReduce();
  testReverse();
  testIndexOf();
  testIsPalindrome();
  testMissing();
  testIsBalanced();
}