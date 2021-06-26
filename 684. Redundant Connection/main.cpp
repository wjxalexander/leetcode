#include <algorithm>  // std::make_heap, std::pop_heap, std::push_heap, std::sort_heap
#include <iostream>
#include <limits>
#include <list>
#include <numeric>
#include <queue>
#include <set>
#include <utility>  // std::pair, std::make_pair
#include <vector>

using namespace std;
using std::vector;
string::iterator it;

class Solution {
 public:
  vector<int> findRedundantConnection(vector<vector<int>>& edges) {
    int myUnion[edges.size() + 1];
    for (int i = 0; i < edges.size() + 1; i++) {
      myUnion[i] = i;
    }
    for (auto& edge : edges) {
      int source = edge[0];
      int target = edge[1];
      int sourceFather = findFather(myUnion, source);
      int targetFather = findFather(myUnion, target);
      if (sourceFather != targetFather) {
        myUnion[targetFather] = sourceFather;
      } else {
        return edge;
      }
    }
    return {0, 0};
  }
  int findFather(int myUnion[], int target) {
    int father = target;
    while (father != myUnion[father]) {
      father = myUnion[father];
    }
    return father;
  }
};

int main(int argc, char const* argv[]) {
  vector<vector<int>> test = {{1, 2}, {1, 3}, {2, 3}};
  Solution mySolution;
  vector<int> ret = mySolution.findRedundantConnection(test);
  //   cout << ret << endl;
  return 0;
}
