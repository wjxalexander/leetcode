// 26 * 0 if has char a[i] = 0
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
  vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> groups;
    string x = "";
    for (string str : strs) {
      x = str;
      sort(x.begin(), x.end());
      if (groups.count(x) > 0) {
        groups[x].push_back(str);
      } else {
        groups[x] = vector<string>{str};
      }
    }
    vector<vector<string>> ret;
    unordered_map<string, vector<string>>::iterator it;
    for (it = groups.begin(); it != groups.end(); it++) {
      ret.push_back(it->second);
    }
    return ret;
  };
};

int main() {
  vector<string> str{"bdddddddddd", "bbbbbbbbbbc"};
  Solution mySolution;
  auto ret = mySolution.groupAnagrams(str);
  return 0;
}