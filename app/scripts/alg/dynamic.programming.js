// reference
// https://mp.weixin.qq.com/s?__biz=MjM5OTA1MDUyMA==&amp;mid=2655438647&amp;idx=1&amp;sn=4634f712fa4d0236aba60b8e8b7cc2cb&amp;chksm=bd730b408a048256f204695598c0e4f74e75c9582f5b9c740057a69747b306de1a4c308d5388&amp;mpshare=1&amp;scene=1&amp;srcid=0702N84baxNAmMFheg6Ck26Z&amp;key=238113c46368 

import { debug, } from './util';

function maxOutput(goldMines, resources) {
  let prev = [],
      curr = [],
      max = -Infinity;

  for (let i = 0; i < goldMines.length; i++) {
    if (i === 0) {
      for (let j = 0; j < resources; j++) {
        if (j+1 < goldMines[0].resource) curr[j] = 0;
        else curr[j] = goldMines[0].output;
      }
    } else {
      const currentMine = goldMines[i];
      for (let j = 0; j < resources; j++) {
        if (j+1 < goldMines[i].resource) curr[j] = 0;
        else curr[j] = Math.max(prev[j], prev[Math.max(0, j-goldMines[i].resource)] + goldMines[i].output);
      }
    }

    debug(`${goldMines[i].id}:${curr}`);
    max = curr.reduce((prev, curr)=>{return Math.max(prev, curr);}, max);

    prev = curr;
    curr = [];
  }

  return max;

}

export const testMaxOutput = function() {
  const goldMines = [
    {id:1, resource:5, output:400},
    {id:2, resource:5, output:500},
    {id:3, resource:3, output:200},
    {id:4, resource:4, output:300},
    {id:5, resource:3, output:350},
  ];

  return maxOutput.bind(null, goldMines, 10);
}();
