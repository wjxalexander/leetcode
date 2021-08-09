var generateTrees = function (n) {
  const ret = [];
  const used = [];
  const _helper = (node, min, max) => {
    used[node] = 1; // backtracking
    const leftArr = [];
    const rightArr = [];
    for (let i = min; i < node; i++) {
      if (!used[i]) {
        used[i] = 1;
        leftArr.push(_helper(i, min, node));
        used[i] = 0;
      }
    }
    for (let i = node + 1; i < max; i++) {
      if (!used[i]) {
        used[i] = 1;
        rightArr.push(_helper(i, node + 1, max));
        used[i] = 0;
      }
    }
    const leftLen = leftArr.length;
    const rightLen = rightArr.length;
    if (leftLen === 0 && rightLen === 0) {
      used[node] = 0;
      return [new TreeNode(node)];
    }
    if (leftLen === 0 && rightLen !== 0) {
      const tempRet = [];
      for (const item of rightArr.flat()) {
        const newNode = new TreeNode(node);
        newNode.right = item;
        tempRet.push(newNode);
      }
      used[node] = 0;
      return tempRet;
    }
    if (leftLen !== 0 && rightLen === 0) {
      const tempRet = [];
      for (const item of leftArr.flat()) {
        const newNode = new TreeNode(node);
        newNode.left = item;
        tempRet.push(newNode);
      }
      used[node] = 0;
      return tempRet;
    }
    const tempRet = [];
    for (const left of leftArr.flat()) {
      for (const right of rightArr.flat()) {
        const newNode = new TreeNode(node);
        newNode.left = left;
        newNode.right = right;
        tempRet.push(newNode);
      }
    }
    used[node] = 0;
    return tempRet;
  };
  for (let i = 1; i < n + 1; i++) {
    const nodeFullRet = _helper(i, 1, n + 1);
    ret.push(...nodeFullRet);
  }
  return ret;
};
