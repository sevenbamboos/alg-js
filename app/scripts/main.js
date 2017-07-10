import * as interviewBasicTest from './alg/interview.basic.test';
import * as dp from './alg/dynamic.programming';
import {info,} from './alg/util';

interviewBasicTest.testSuite();

const foo = {id:1, name:"foo"};
const {id, ...rest} = foo;


info(`Max output:${dp.testMaxOutput()}`);
