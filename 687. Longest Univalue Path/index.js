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
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  if (!root) {
    return 0;
  }
  let ret = 0;
  const _help = (node) => {
    if (!node.left && !node.right) {
      return { val: node.val, length: 0 };
    }

    const leftRet = node.left ? _help(node.left) : null;
    const rightRet = node.right ? _help(node.right) : null;
    if (
      leftRet &&
      rightRet &&
      leftRet.val === rightRet.val &&
      leftRet.val === node.val
    ) {
      const length = leftRet.length + rightRet.length + 2;
      ret = Math.max(ret, length);
      return {
        val: node.val,
        length: Math.max(leftRet.length, rightRet.length) + 1,
      };
    }
    if (leftRet && leftRet.val === node.val) {
      const length = leftRet.length + 1;
      ret = Math.max(ret, length);
      return { val: node.val, length };
    }
    if (rightRet && rightRet.val === node.val) {
      const length = rightRet.length + 1;
      ret = Math.max(ret, length);
      return { val: node.val, length };
    }
    return { val: node.val, length: 0 };
  };
  _help(root);
  return ret;
};

const root = {
  val: 5,
  left: {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 1, left: null, right: null },
  },
  right: { val: 5, left: { val: 5, left: null, right: null }, right: null },
};

// {
//   val: 1,
//   left: {
//     val: 4,
//     left: { val: 4, left: null, right: null },
//     right: { val: 4, left: null, right: null },
//   },
//   right: { val: 5, left: { val: 5, left: null, right: null }, right: null },
// };

// {
//   val: 5,
//   left: {
//     val: 4,
//     left: { val: 1, left: null, right: null },
//     right: { val: 1, left: null, right: null },
//   },
//   right: { val: 5, left: { val: 5, left: null, right: null }, right: null },
// };
const a = longestUnivaluePath(root);
console.log(a);
