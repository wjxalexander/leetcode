/**
 * @param {string} s
 * @return {string}
 * 假设最后一个为vn
 * 1. 最后答案包括vn时 则 S[i+1]-S[n-1] 为 palindrome 且 s[i] === vn
 * 2. 不包括vn 时 则返回 S[n-1] 的答案
 */

var longestPalindrome = function (s) {
  const dp = Array.from(s, () => Array.from(s, () => 0));
  const length = s.length;
  let ret = [0, 0];
  for (let i = 0; i < length; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < length; i++) {
    if (s[i] === s[i - 1]) {
      dp[1][i] = 1;
      ret[0] = i - 1;
      ret[1] = i + 1;
    }
  }
  // row paralength - 1
  for (let i = 2; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (s[j] === s[j + i] && dp[i - 2][j + i - 1] === 1) {
        // S[n-1] 为true
        const subStringLen = j + i + 1 - j;
        const currentRetLen = ret[1] - ret[0];
        if (subStringLen > currentRetLen) {
          ret[0] = j;
          ret[1] = j + i + 1;
        }
        dp[i][j + i] = 1; // j+i位置为最后一位的长度为 i+1是Palindrome
      }
    }
  }
  return s.substring(ret[0], ret[1]);
};
const a = "aaaaaa";
longestPalindrome(a);
