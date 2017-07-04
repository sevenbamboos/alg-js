function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n-1);
}

function fib(n) {
  var n1 = 0,
      n2 = 1;

  var index = 0;
  while (index++ < n) {
    [n1, n2] = [n2, n1+n2];
  }
  return n1;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] >= arr[i+1]) {
      return false;
    }
  }
  return true;
}

function filter(arr, predictor) {
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

function reduce(arr, reducer, initValue) {
  var result = initValue;
  if (arr && reducer) {
    arr.forEach(x=>{
      result = reducer.call(null, x, result);
    });
  }
  return result;
}

function reverse(s) {
  if (!s) return s;

  let bufArr = s.split('');
  for (var i = 0; i < bufArr.length/2; i++) {
    [bufArr[i], bufArr[bufArr.length-1-i]] = [bufArr[bufArr.length-1-i], bufArr[i]];
  }
  return bufArr.join('');
}

export { isPrime, factorial, fib, isSorted, filter, reduce, reverse, };