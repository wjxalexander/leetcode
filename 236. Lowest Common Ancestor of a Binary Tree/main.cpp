/**
 * Definition for a binary tree node.

 */
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

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
 public:
  TreeNode* ret;
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    std::function<int(TreeNode*, int)> lambdaDfs;
    lambdaDfs = [&](TreeNode* node, int lastCount) -> int {
      if (ret) {
        return 0;
      }
      int currentCount = lastCount;
      if (node == NULL) {
        return 0;
      }
      if (node == p || node == q) {
        currentCount += 1;
      }
      int left = lambdaDfs(node->left, 0);
      int right = lambdaDfs(node->right, 0);
      int countWithChild = currentCount + left + right;
      if (countWithChild == 2 && !ret) {
        ret = node;
        return 0;
      }
      return countWithChild;
    };
    lambdaDfs(root, 0);
    return ret;
  };
};