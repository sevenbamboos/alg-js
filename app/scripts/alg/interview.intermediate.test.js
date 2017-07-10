import { 
  info, debug, assert, assertArray, assertArrayWithoutOrder, assertObject, 
} from './util';

import {
  isBalanced2, uniq, intersection, sort, includes, assignDeep,
} from './interview.intermediate';

function testIsBalanced2() {
  assert(false, isBalanced2());
  assert(false, isBalanced2('{foo}'));
  assert(false, isBalanced2('{foo}', '{'));
  assert(true, isBalanced2('{foo}', '{', '}'));
  assert(true, isBalanced2('(foo)', '{', '}'));
  assert(false, isBalanced2('(f{oo)', '{', '}'));
  assert(true, isBalanced2('(f{oo})', '{', '}'));

  const braces = ['(', ')', '{', '}', '[', ']'];
  assert(true, isBalanced2('(foo { bar (baz) [boo] })', ...braces)); 
  assert(false, isBalanced2('foo { bar { baz }', ...braces)); 
  assert(false, isBalanced2('foo { (bar [baz] } )', ...braces));

  info("[testIsBalanced2] passed");
}

function testUniq() {
  assertArray([], uniq([]));
  assertArrayWithoutOrder([1,4,2,3,8], uniq([1, 4, 2, 2, 3, 4, 8]));           // [1, 4, 2, 3, 8]
  info("[testUniq] passed");
}

function testIntersection() {
  assertArrayWithoutOrder([4,1], intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
  assertArrayWithoutOrder([], intersection([1, 5, 4, 2], [7, 12]));

  info("[testIntersection] passed");
}

function testSort() {

  const assertSort = function(expected, origin) {
    sort(origin);
    assertArray(expected, origin);
  }

  assertSort([], []);
  assertSort([-4, 0, 1, 3, 3, Infinity], [-4, 1, Infinity, 3, 3, 0]);
  assertSort([0,1,2,3,4,5,6,7,8,9], [4,2,6,9,1,3,8,7,5,0]);

  info("[testSort] passed");
}

function testIncludes() {
  assert(true, includes([1, 3, 8, 10], 8));
  assert(true, includes([1, 3, 8, 8, 15], 15));
  assert(false, includes([1, 3, 8, 10, 15], 9));

  info("[testIncludes] passed");
}

function testAssignDeep() {
  assertObject(assignDeep({ a: 1 }, {}), { a: 1 });
  assertObject(assignDeep({ a: 1 }, { a: 2 }), { a: 2 });
  assertObject(assignDeep({ a: 1 }, { a: { b: 2 } }), { a: { b: 2 } });
  assertObject(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }), { a: { b: { c: 1, d: 2 }}, e: 3 });
  info("[testAssignDeep] passed");
}

export function testSuite() {
  info("*** intermediate ***");
  testIsBalanced2();
  testUniq();
  testIntersection();
  testSort();
  testIncludes();
  testAssignDeep();
}
