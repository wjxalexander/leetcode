#include <algorithm>  // std::make_heap, std::pop_heap, std::push_heap, std::sort_heap
#include <iostream>
#include <limits>
#include <queue>
#include <utility>  // std::pair, std::make_pair
#include <vector>
using namespace std;
using std::vector;

class Solution {
 public:
  int countNegatives(vector<vector<int>>& grid) {
    int row = grid.size();
    int col = grid[0].size();
    int i = 0;
    int j = col - 1;
    int ret = 0;
    while (i < row && j >= 0) {
      if (grid[i][j] < 0) {
        ret += row - i;
        j--;
      } else {
        i++;
      }
    }
    return ret;
  }
};
int main(int argc, char const* argv[]) {
  vector<vector<int>> grid = {
      {4, 3, 2, -1}, {3, 2, 1, -1}, {1, 1, -1, -2}, {-1, -1, -2, -3}};
  Solution mySolution;
  int ret = mySolution.countNegatives(grid);
  cout << ret << endl;
  return 0;
}
