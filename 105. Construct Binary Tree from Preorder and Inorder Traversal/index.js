/**
 * Definition for a binary tree node.
  function TreeNode(val) {
     this.val = val;
      this.left = this.right = null;
  }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (inorder, postorder) {
  if (postorder.length === 0 && inorder.length === 0) {
    return null;
  }
  if (postorder.length === 1) {
    return new TreeNode(postorder[0]);
  }
  if (inorder.length === 1) {
    return new TreeNode(inorder[0]);
  }
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  const rootPositionInInorder = inorder.indexOf(rootVal);
  const leftTreeInInorder = inorder.slice(0, rootPositionInInorder);
  const rightTreeInInorder = inorder.slice(rootPositionInInorder + 1);
  const leftTreeLength = leftTreeInInorder.length;
  const leftTreeInPostorder = postorder.slice(0, leftTreeLength);
  const rightTreeInPostorder = postorder.slice(
    leftTreeLength,
    postorder.length - 1
  );
  root.left = buildTree(leftTreeInInorder, leftTreeInPostorder);
  root.right = buildTree(rightTreeInInorder, rightTreeInPostorder);
  return root;
};
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
buildTree(inorder, postorder);
