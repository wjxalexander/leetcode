var diameterOfBinaryTree = function (root) {
  let max = 0;
  const calcDeepest = (node) => {
    let leftRet = 0;
    let rightRet = 0;

    if (!node.left && !node.right) {
      return 1;
    }
    if (node.left) {
      leftRet = calcDeepest(node.left);
    }
    if (node.right) {
      rightRet = calcDeepest(node.right);
    }
    max = Math.max(max, rightRet + leftRet);
    return Math.max(rightRet, leftRet) + 1;
  };
  calcDeepest(root);
  return max;
};
