var integerReplacement = function (n) {
  const dp = new Map();
  dp.set(1, 0);
  dp.set(2, 1);
  const _help = (n) => {
    if (dp.has(n)) {
      return dp.get(n);
    }
    let res;
    if (n % 2 === 0) {
      res = 1 + _help(n / 2);
    } else {
      const lessRet = _help(n - 1);
      const largeRet = _help(n + 1);
      res = 1 + Math.min(lessRet, largeRet);
    }
    dp.set(n, res);
    return res;
  };
  _help(n);
  return dp.get(n);
};
