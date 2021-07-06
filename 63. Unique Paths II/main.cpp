#include <algorithm>  // std::make_heap, std::pop_heap, std::push_heap, std::sort_heap
#include <iostream>
#include <iterator>
#include <limits>
#include <queue>
#include <sstream>
#include <string>
#include <unordered_map>
#include <utility>  // std::pair, std::make_pair
#include <vector>

using namespace std;
using std::vector;

class Solution {
 public:
  int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
    if (obstacleGrid[0][0] == 1) {
      return 0;
    }
    const int row = obstacleGrid.size();
    const int col = obstacleGrid[0].size();
    vector<vector<int>> dp(row, vector<int>(col));
    dp[0][0] = 1;
    for (int i = 1; i < row; i++) {
      dp[i][0] = (obstacleGrid[i][0] == 0 && dp[i - 1][0] == 1) ? 1 : 0;
    }
    for (int j = 1; j < col; j++) {
      dp[0][j] = (obstacleGrid[0][j] == 0 && dp[0][j - 1] == 1) ? 1 : 0;
    }
    // bottom up method: dp[i][j] = dp[top] + dp[left]
    for (int i = 1; i < row; i++) {
      for (int j = 1; j < col; j++) {
        if (obstacleGrid[i][j] == 0) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        } else {
          dp[i][j] = 0;
        }
      }
    }
    return dp[row - 1][col - 1];
  }
};
int main() {
  vector<vector<int>> matrix{{0, 0}, {1, 1}, {0, 0}};
  Solution mySolution;
  int ret = mySolution.uniquePathsWithObstacles(matrix);
  return ret;
}