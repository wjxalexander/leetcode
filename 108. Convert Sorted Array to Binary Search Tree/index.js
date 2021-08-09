/**
 * Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
     this.left = this.right = null;
  }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function (nums) {
  const _help = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    if (arr.length === 1) {
      return new TreeNode(arr[0]);
    }
    const mid = Number.parseInt(arr.length / 2, 10);
    const root = new TreeNode(arr[mid]);
    const left = _help(arr.slice(0, mid));
    const right = _help(arr.slice(mid + 1));
    root.left = left;
    root.right = right;
    return root;
  };
  return _help(nums);
};
var sortedArrayToBST_2 = function (nums) {
  const _help = (start, end) => {
    if (start === end) {
      return new TreeNode(start);
    }

    const mid = Number.parseInt((end - start) / 2, 10);
    const root = new TreeNode(nums[mid]);
    const left = _help(start, mid - 1);
    const right = _help(mid + 1, end);
    root.left = left;
    root.right = right;
    return root;
  };
  return _help(0, nums.length - 1);
};
sortedArrayToBST([]);
