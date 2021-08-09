var isBalanced = function (root) {
  let ret = undefined;
  const _help = (node) => {
    if (ret !== undefined) {
      return;
    }
    if (!node) {
      return 0;
    }
    const leftHeight = _help(node.left);
    const rightHeight = _help(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ret = false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  };
  _help(root);
  return ret === false ? false : true;
};
const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: { val: 4, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  },
  right: { val: 2, left: null, right: null },
};

isBalanced(tree);
