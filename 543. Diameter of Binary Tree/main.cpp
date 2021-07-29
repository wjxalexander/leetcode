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
  int diameterOfBinaryTree(TreeNode* root) {
    int ret = 0;
    std::function<int(TreeNode*)> lambdaDfs;
    lambdaDfs = [&](TreeNode* node) -> int {
      int leftRet = 0;
      int rightRet = 0;
      if (node->left == NULL && node->right == NULL) {
        return 1;
      }
      if (node->left != NULL) {
        leftRet = lambdaDfs(node->left);
      }
      if (node->right != NULL) {
        rightRet = lambdaDfs(node->right);
      }
      ret = max(ret, leftRet + rightRet);
      return max(leftRet, rightRet) + 1;
    };
    lambdaDfs(root);
    return ret;
  };
};