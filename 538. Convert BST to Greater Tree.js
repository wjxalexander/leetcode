/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  const _help = (root, parentVal = 0) => {
    if (!root) {
      return
    }
    if (!root.left && !root.right) {
      root.val += parentVal;
      return root.val
    }
    const rightVal = root.right ? _help(root.right, parentVal) : 0;
    root.val = root.val + (rightVal || parentVal);
    const leftVal = root.left ? _help(root.left, root.val) : 0;
    return leftVal || root.val

  }
  _help(root)
  return root
};

const root = '{"val":-3,"left":{"val":-4,"left":null,"right":null},"right":{"val":0,"left":{"val":-2,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}'
convertBST(JSON.parse(root))