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
  int minimumTotal(vector<vector<int>> &triangle) {
    vector<vector<int>> dp = {{triangle[0][0]}};
    if (triangle.size() == 1) {
      return triangle[0][0];
    }
    int i = 1;
    while (i < triangle.size()) {
      dp.push_back(vector<int>(triangle[i].size()));
      for (int j = 0; j < triangle[i].size(); j++) {
        const int upper =
            i - 1 < 0 || j >= dp[i - 1].size() ? INT_MAX : dp[i - 1][j];
        const int upperLeft =
            i - 1 < 0 || j - 1 < 0 ? INT_MAX : dp[i - 1][j - 1];
        dp[i][j] = triangle[i][j] + min(upper, upperLeft);
      }
      i++;
    }
    vector<int> last_row = dp.back();
    return *min_element(last_row.begin(), last_row.end());
  };
};

int main() {
  vector<vector<int>> tri = {{2}, {3, 4}, {6, 5, 7}, {4, 1, 8, 3}};
  Solution mySolution;
  int ret = mySolution.minimumTotal(tri);
  cout << ret << endl;
  return 0;
};
