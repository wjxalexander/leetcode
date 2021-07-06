class Solution {
 public:
  int uniquePaths(int m, int n) {
    int dp[m][n];
    // vector<vector<isnt>> dp(m, vector<int>(n));
    dp[0][0] = 1;
    // initialize edge case only can reach from siblings
    for (int i = 1; i < n; i++) {
      dp[0][i] = 1;
    }
    for (int j = 1; j < m; j++) {
      dp[j][0] = 1;
    }
    // bottom up method: dp[i][j] = dp[top] + dp[left]
    for (int i = 1; i < m; i++) {
      for (int j = 1; j < n; j++) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }

    return dp[m - 1][n - 1];
  };
};