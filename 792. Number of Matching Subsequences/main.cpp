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
  int numMatchingSubseq(string s, vector<string>& words) {
    int ret = 0;
    std::set<string> isSubSet;
    std::set<string> notSubSet;
    for (string word : words) {
      if (isSubSet.count(word) > 0) {
        ret++;
        continue;
      }
      if (notSubSet.count(word) > 0) {
        continue;
      }
      bool searchRet = searchSubseq(s, word);
      if (searchRet) {
        isSubSet.insert(word);
        ret++;
      } else {
        notSubSet.insert(word);
      }
    }
    return ret;
  }
  bool searchSubseq(string s, string word) {
    int i = 0;
    int prev = -1;
    while (i < word.size()) {
      std::size_t index = s.find(word[i], prev + 1);
      if (index == std::string::npos) {
        return false;
      } else {
        prev = index + 1;
        i++;
      }
    }
    return true;
  }
};
int main(int argc, char const* argv[]) {
  string s = "abcde";
  vector<string>& words = {"a", "bb", "acd", "ace"};
  Solution mySolution;
  int ret = mySolution.numMatchingSubseq(s, words);
  cout << ret << endl;
  return 0;
}
