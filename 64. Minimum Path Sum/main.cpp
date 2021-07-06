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
  int minPathSum(vector<vector<int>>& grid) {
    vector<vector<int>> dp(grid.size(), std::vector<int>(grid[0].size(), 0));
    dp[0][0] = grid[0][0];
    // init dp
    for (int i = 1; i < grid[0].size(); i++) {
      dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    for (int j = 1; j < grid.size(); j++) {
      dp[j][0] = dp[j - 1][0] + grid[j][0];
    }
    // dp algorithm
    for (int i = 1; i < grid.size(); i++) {
      for (int j = 1; j < grid[0].size(); j++) {
        dp[i][j] = grid[i][j] + std::min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return dp.back().back();
  }
};