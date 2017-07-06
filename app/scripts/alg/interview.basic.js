/*
 Reference: https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-%28written-by-a-Frontend-Engineer%29 
*/

export function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

export function factorial(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n-1);
}

export function fib(n) {
  var n1 = 0,
      n2 = 1;

  var index = 0;
  while (index++ < n) {
    [n1, n2] = [n2, n1+n2];
  }
  return n1;
}

export function isSorted(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] >= arr[i+1]) {
      return false;
    }
  }
  return true;
}

export function filter(arr, predictor) {
  let result = [];
  if (arr) {
    if (!predictor) {
      return arr;
    }

    arr.forEach(x=>{
      if (predictor.call(null, x)) {
        result.push(x);
      }
    });
  } 
  return result;
}

export function reduce(arr, reducer, initValue) {
  var result = initValue;
  if (arr && reducer) {
    arr.forEach(x=>{
      result = reducer.call(null, x, result);
    });
  }
  return result;
}

export function reverse(s) {
  if (!s) return s;

  let bufArr = s.split('');
  for (var i = 0; i < bufArr.length/2; i++) {
    [bufArr[i], bufArr[bufArr.length-1-i]] = [bufArr[bufArr.length-1-i], bufArr[i]];
  }
  return bufArr.join('');
}

export function indexOf(arr, e) {
  if (!arr || !Array.isArray(arr) || !e) return -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == e) return i;
  }
  return -1;
}

export function isPalindrome(s) {
  if (typeof s !== 'string') return false;
  if (!s) return true;
  let arr = s.replace(/\s+/g, '').toUpperCase().split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[arr.length-1-i]) return false;
  }
  return true;
}

/*
missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
*/
export function missing(arr) {
  if (!arr || !Array.isArray(arr)) return undefined;

  const sum = arr.reduce((prev, curr)=>{ return curr + prev;}, 0);
  const expected = arr.length * (arr.length+1) / 2;
  if (expected === sum) return undefined;
  return expected + arr.length+1 - sum;
}

// for inverval not must start from 1
export function missingForAnyInterval(arr) {
  if (!arr || !Array.isArray(arr)) return undefined;

  let min = Infinity,
      max = -Infinity;
  arr.forEach(x=>{
    if (x < min) {
      min = x;
    }
    if (x > max) {
      max = x;
    }
  });

  let sortedArr = [];
  arr.forEach(x=>{
    sortedArr[x-min] = 1;
  });

  for (let i = 0; i < max-min+1; i++) {
    if (sortedArr[i] !== 1) return i+min;
  }
  return undefined;
}

/*
isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
*/
export function isBalanced(s) {
  if (!s || typeof s !== 'string') return false;
  let braceStack = [],
      charArr = s.split('');
  
  for (let i = 0; i < charArr.length; i++) {
    const c = charArr[i];
    if (c === '{') {
      braceStack.push(c);
    } else if (c === '}') {
      if (braceStack.pop() !== '{') {
        return false;
      }
    }
  }
  return braceStack.length === 0;
}
