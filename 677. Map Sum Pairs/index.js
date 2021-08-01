/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.dicTree = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  if (!this.dicTree[key[0]]) {
    this.dicTree[key[0]] = { val: 0, children: {} };
  }

  let rootNode = this.dicTree[key[0]];
  let i = 1;
  while (i < key.length) {
    if (!rootNode.children[key[i]]) {
      rootNode.children[key[i]] = { val: 0, children: {} };
    }
    rootNode = rootNode.children[key[i]];
    i++;
  }
  rootNode.val = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let rootNode = this.dicTree[prefix[0]];
  if (!rootNode) {
    return 0;
  }
  let i = 1;
  while (i < prefix.length) {
    rootNode = rootNode.children[prefix[i]];
    if (!rootNode) {
      return 0;
    }
    i++;
  }
  const _help = (node) => {
    const childrenVals = Object.values(node.children);
    if (childrenVals.length === 0) {
      return node.val;
    }
    let ret = node.val;
    for (const child of childrenVals) {
      ret += _help(child);
    }
    return ret;
  };
  return _help(rootNode);
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
mapSum = new MapSum();
mapSum.insert("apple", 3);
// mapSum.sum("ap");
mapSum.insert("app", 2);
console.log(mapSum.sum("ap"));
