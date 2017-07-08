import * as interviewBasicTest from './alg/interview.basic.test';
import * as interviewIntermediateTest from './alg/interview.intermediate.test';
import * as dp from './alg/dynamic.programming';
import {info, debug, } from './alg/util';

interviewIntermediateTest.testSuite();
interviewBasicTest.testSuite();

info(`Max output:${dp.testMaxOutput()}`);

// array destructing ES6
let foo = [4,5];
let bar = [1,2,3,...foo];
debug(bar);

// obj destructing ES stage-3
foo = {name:"foo", age:"3", desc:"a tiny toy for debug"};
bar = {id:"2", ...foo};
debug(`${bar.desc}`);
