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

export { isPrime, factorial, fib, };