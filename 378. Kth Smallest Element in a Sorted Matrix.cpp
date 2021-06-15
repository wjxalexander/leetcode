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
  int kthSmallest(vector<vector<int>>& matrix, int k) {
    int n = matrix.size();

    int left = matrix[0][0], right = matrix[n - 1][n - 1], mid;
    while (left <= right) {
      mid = left + (right - left) / 2;
      int count = 0;

      for (int i = 0; i < n; i++) {
        count += upper_bound(matrix[i].begin(), matrix[i].end(), mid) -
                 matrix[i].begin();
        // count is the count of ele less than mid in the matrix
      }

      if (count < k)
        left = mid + 1;
      else
        right = mid - 1;
    }

    return left;
  }
};

int main() {
  vector<vector<int>> matrix{{1, 5, 9}, {10, 11, 12}, {12, 13, 15}};
  Solution mySolution;
  int ret = mySolution.kthSmallest(matrix, 8);
  return ret;
}