
#include <algorithm>  // std::make_heap, std::pop_heap, std::push_heap, std::sort_heap
#include <iostream>
#include <limits>
#include <list>
#include <numeric>
#include <queue>
#include <utility>  // std::pair, std::make_pair
#include <vector>

using namespace std;
using std::vector;
string::iterator it;
class Solution {
 public:
  int minCostClimbingStairs(vector<int>& cost) {
    vector<int> dp = {cost[0], cost[1]};
    for (int i = 2; i < cost.size(); i++) {
      dp.push_back(min(dp[i - 1], dp[i - 2]) + cost[i]);
    }
    return min(dp.end()[-2], dp.back());
  }
};