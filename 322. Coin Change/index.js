var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  if (coins.indexOf(amount) > -1) {
    return 1;
  }
  const dp = Array.from({ length: amount + 1 }, () => []);
  for (let i = coins.length - 1; i > -1; i--) {
    dp[0][i] = amount - coins[i];
  }
};
