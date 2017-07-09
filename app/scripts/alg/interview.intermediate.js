import {
  shuffle, debug,
} from './util';

/*
isBalanced2 - Like the isBalanced function you implemented above, but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.
*/
export function isBalanced2(s, ...braces) {
  if (!s || typeof s !== 'string') return false;
  if (!braces || braces.length === 0 || braces.length % 2 !== 0) return false;

  // parse braces
  let startBraces = [],
      endBraces = [];
  braces.forEach((x,i)=>{
    if (i % 2 === 0) {
      startBraces.push(x);
    } else {
      endBraces.push(x);
    }
  });

  let stack = [];
  let inputs = s.split('');
  for (let i = 0; i < inputs.length; i++) {
    const c = inputs[i];
    let index = -1;

    // is start brace
    if (startBraces.indexOf(c) !== -1) {
      stack.push(c);
    
    // is end brace
    } else if ((index = endBraces.indexOf(c)) !== -1) {
      if (stack.pop() !== startBraces[index]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/*
uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?
*/
export function uniq(arr) {
  if (!Array.isArray(arr)) return [];

  const dict = {};
  arr.forEach(x=>{
    dict[x] = true;
  });

  return Object.getOwnPropertyNames(dict).map(x=>{return Number(x)});
}

/*
intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
*/
export function intersection(arr1, arr2) {
  const dict = {};

  const result = [];
  arr1.concat(arr2).forEach(x=>{
    if (dict[x]) {
      result.push(x);
    } else {
      dict[x] = true;
    }
  });
  return result;
}


/*
sort - Implement the sort function to sort an array of numbers in O(N×log(N)) time.
*/
export function sort(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return;
  
  shuffle(arr);

  const _swap = function(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  const _sort = function (arr, begin, end) {

    if (begin >= end) return;

    const pivot = arr[begin];
    let head = begin+1,
        tail = end;
    
    // make partition according to pivot
    while (head < tail) {
      while (head < end && arr[head] < pivot) head++;
      while (tail > head && arr[tail] > pivot) tail--;
      if (head < tail) {
        _swap(arr, head++, tail--);
      }
    }

    // put pivot in the correct position
    let splitIndex = begin;
    if (arr[tail] < pivot) {
      _swap(arr, begin, tail);
      splitIndex = tail;
    } else {
      _swap(arr, begin, tail-1);
      splitIndex = tail-1;
    }

    // do sort for two sub groups
    _sort(arr, begin, splitIndex-1);
    _sort(arr, splitIndex+1, end);
  };

  _sort(arr, 0, arr.length-1);
}