#include <algorithm>  // std::make_heap, std::pop_heap, std::push_heap, std::sort_heap
#include <iostream>
#include <limits>
#include <list>
#include <numeric>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <utility>  // std::pair, std::make_pair
#include <vector>

using namespace std;
using std::vector;
string::iterator it;

class Solution {
 public:
  bool isIsomorphic(string s, string t) {
    unordered_map<char, char> mymap;
    unordered_set<char> usedchar;
    const int length = s.size();
    for (int i = 0; i < length; i++) {
      unordered_map<char, char>::const_iterator got = mymap.find(s[i]);
      if (got == mymap.end()) {
        // not find
        if (usedchar.count(t[i]) == 0) {
          // 1 to 1 maping
          mymap.insert(make_pair(s[i], t[i]));
          usedchar.insert(t[i]);
        } else {
          return false;
        }
      } else {
        if (got->second != t[i]) {
          return false;
        }
      }
    }
    return true;
  }
};