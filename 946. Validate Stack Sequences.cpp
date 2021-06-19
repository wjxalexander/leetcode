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

class Solution {
 public:
  bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
    if (pushed.size() == 0 && popped.size() == 0) {
      return true;
    }
    vector<int> myStack = {};
    int i = 0;
    int j = 0;
    while (j < popped.size()) {
      if (myStack.size() == 0) {
        myStack.push_back(pushed[i++]);
        continue;
      }
      if (myStack.back() == popped[j]) {
        myStack.pop_back();
        j++;
        if (popped.size() > 0 && i < pushed.size() && pushed[i] == popped[j]) {
          myStack.push_back(pushed[i++]);
        }
      } else {
        if (i < pushed.size()) {
          myStack.push_back(pushed[i++]);
        } else {
          break;
        }
      }
    }
    return myStack.size() == 0;
  }
};

int main(int argc, char const* argv[]) {
  vector<int> pushed = {0, 1};
  vector<int> popped = {1, 0};
  Solution mySolution;
  bool ret = mySolution.validateStackSequences(pushed, popped);
  cout << ret << endl;
  return 0;
}
