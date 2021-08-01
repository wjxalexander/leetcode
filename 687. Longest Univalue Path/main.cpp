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
  int ret;
  int longestUnivaluePath(TreeNode* root) {
    if (root == NULL) {
      return 0;
    }
    helper(root);
    return ret;
  };
  int helper(TreeNode* node) {
    if (node == NULL) {
      return 0;
    }
    int leftResult = helper(node->left);
    int rightResult = helper(node->right);
    int pl = 0;
    int pr = 0;
    if (node->left != NULL && node->val == node->left->val) {
      pl = leftResult + 1;
    }
    if (node->right != NULL && node->val == node->right->val) {
      pr = rightResult + 1;
    }
    ret = max(ret, pl + pr);
    return max(pl, pr);
  }
};