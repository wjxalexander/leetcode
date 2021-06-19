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
  int scoreOfParentheses(string s) {
    vector<int> mylist1;
    for (it = s.begin(); it != s.end(); ++it) {
      if (*it == '(') {
        mylist1.push_back(-1);
      } else {
        updateList(mylist1);
      }
    }
    return accumulate(mylist1.begin(), mylist1.end(), 0);
  }
  void updateList(vector<int>& list) {
    int tempRet = 0;
    int i = list.size() - 1;
    while (i >= 0) {
      if (list[i] != -1) {
        tempRet += list[i];
      } else {
        list[i] = tempRet == 0 ? 1 : 2 * tempRet;
        list.resize(i + 1);
        break;
      }
      i--;
    }
  }
};
int main(int argc, char const* argv[]) {
  string s = "(()(()))";
  Solution mySolution;
  int ret = mySolution.scoreOfParentheses(s);
  cout << ret << endl;
  return 0;
}
