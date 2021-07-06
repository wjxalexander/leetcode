/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ret = null
    const _dfs = (node, lastCount) => {
        if (ret) {
            return
        }
        let currentCount = lastCount
        if (!node) {
            return 0
        }

        if (node.val === p.val || node.val === q.val) {
            currentCount += 1
        }
        const left = _dfs(node.left, 0)
        const right = _dfs(node.right, 0)
        const countWithChild = currentCount + left + right
        if (countWithChild === 2 && !ret) {
            ret = node
            return 0
        }
        return countWithChild
    }
    _dfs(root, 0)
    return ret
};

const root = {
    "val": 3,
    "left": {
        "val": 5,
        "left": {
            "val": 6,
            "left": null,
            "right": null
        },
        "right": {
            "val": 2,
            "left": {
                "val": 7,
                "left": null,
                "right": null
            },
            "right": {
                "val": 4,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "val": 1,
        "left": {
            "val": 0,
            "left": null,
            "right": null
        },
        "right": {
            "val": 8,
            "left": null,
            "right": null
        }
    }
}
const p = { "val": 5, "left": { "val": 6, "left": null, "right": null }, "right": { "val": 2, "left": { "val": 7, "left": null, "right": null }, "right": { "val": 4, "left": null, "right": null } } }
// const q = { "val": 1, "left": { "val": 0, "left": null, "right": null }, "right": { "val": 8, "left": null, "right": null } }
const q = { "val": 4, "left": null, "right": null }
lowestCommonAncestor(root, p, q)