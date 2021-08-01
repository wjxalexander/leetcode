var minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};

const a = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
const ret = minCostClimbingStairs(a);
console.log(ret);
