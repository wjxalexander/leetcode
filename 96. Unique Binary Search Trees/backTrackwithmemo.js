var numTrees = function (n) {
  let ret = 0;
  const used = [];
  const dp = Array.from({ length: 20 }, () =>
    Array.from({ length: 20 }, () => [])
  );
  const _help = (n, min, max) => {
    used[n] = 1;
    let leftRet = 0;
    let rightRet = 0;
    let curRet = 0;
    if (dp[n][min][max]) {
      used[n] = 0;
      return dp[n][min][max];
    }
    for (let i = min; i < n; i++) {
      if (!used[i]) {
        used[i] = 1;
        leftRet += _help(i, min, n);
        used[i] = 0;
      }
    }
    for (let i = n + 1; i < max; i++) {
      if (!used[i]) {
        used[i] = 1;
        rightRet += _help(i, n + 1, max);
        used[i] = 0;
      }
    }
    curRet = leftRet * rightRet || leftRet || rightRet || 1;
    used[n] = 0;
    dp[n][min][max] = curRet;
    return curRet;
  };
  for (let i = 1; i < n + 1; i++) {
    ret += _help(i, 1, n + 1);
  }
  return ret;
};
numTrees(19);
