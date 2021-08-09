var numTrees = function (n) {
  const dp = Array.from({ length: 20 }, () => []);
  const _help = (start, end) => {
    if (start >= end) {
      return 1;
    }
    if (dp[start][end]) {
      return dp[start][end];
    }
    let curRet = 0;
    for (let i = start; i <= end; i++) {
      const left = _help(start, i - 1);
      const right = _help(i + 1, end);
      curRet += left * right;
    }
    dp[start][end] = curRet;

    return curRet;
  };
  const ret = _help(1, n);
  console.log(ret);
};
numTrees(19);
