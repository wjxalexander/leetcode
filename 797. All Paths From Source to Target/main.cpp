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
  vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
    vector<vector<int>> ret;
    vector<int> path = {0};
    std::function<void(vector<int> & node, int val)> lambdaDfs;
    lambdaDfs = [&](vector<int>& node, int val) -> void {
      if (val == graph.size() - 1) {
        vector<int> copyvector = path;
        ret.push_back(copyvector);
        return;
      }
      for (int vertice : node) {
        if (std::find(path.begin(), path.end(), vertice) == path.end()) {
          path.push_back(vertice);
          lambdaDfs(graph[vertice], vertice);
        }
        path.pop_back();
      }
      return;
    };
    lambdaDfs(graph[0], 0);
    return ret;
  }
};