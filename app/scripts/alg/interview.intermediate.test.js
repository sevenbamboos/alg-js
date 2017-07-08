import { info, assert, assertArray, } from './util';

import {
  isBalanced2,
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

export function testSuite() {
  info("*** intermediate ***");
  testIsBalanced2();
}
