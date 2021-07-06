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
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    const int minVal = min(p->val, q->val);
    const int maxVal = max(p->val, q->val);
    std::function<TreeNode*(TreeNode*)> lambdaDfs;
    lambdaDfs = [&](TreeNode* node) -> TreeNode* {
      const int nodeVal = node->val;
      if (minVal > nodeVal) {
        return lambdaDfs(node->right);
      } else if (maxVal < nodeVal) {
        return lambdaDfs(node->left);
      } else {
        return node;
      }
    };
    return lambdaDfs(root);
  };
};