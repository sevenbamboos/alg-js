import * as interviewBasicTest from './alg/interview.basic.test';
import * as dp from './alg/dynamic.programming';
import {info,} from './alg/util';

interviewBasicTest.testSuite();

info(`Max output:${dp.testMaxOutput()}`);
