#include <cstddef>
#include <type_traits>

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};
class Solution {
 public:
  TreeNode *convertBST(TreeNode *root) {
    _helper(root);
    return root;
  }
  int _helper(TreeNode *root, int parentVal = 0) {
    if (root == NULL) {
      return 0;
    }
    if (root->left == NULL && root->right == NULL) {
      root->val += parentVal;
      return root->val;
    }
    int rightVal = root->right ? _helper(root->right, parentVal) : 0;
    root->val += rightVal == 0 ? parentVal : rightVal;
    int leftVal = root->left ? _helper(root->left, root->val) : 0;
    return leftVal == 0 ? root->val : leftVal;
  }
};
// int main() {
//   vector<vector<int>> matrix{{1, 5, 9}, {10, 11, 12}, {12, 13, 15}};
//   Solution mySolution;
//   int ret = mySolution.kthSmallest(matrix, 8);
//   return ret;
// }