var findMaxAverage = function (nums, k) {
  const calSum = (i) => {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    return sum;
  };
  let ret = calSum(0);
  const memo = [ret];
  for (let i = 1; i <= nums.length - k; i++) {
    const currentSum = memo[i - 1] - nums[i - 1] + nums[i - 1 + k];
    memo[i] = currentSum;
    ret = Math.max(ret, currentSum);
  }
  return (ret / k).toFixed(5);
};
const arr = [1, 12, -5, -6, 50, 3];
const k = 4;
findMaxAverage(arr, k);
