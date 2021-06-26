// dfs
var findRedundantConnection = function (edges) {
    const graph = new Map()
    const _help = (source, target, reviewed) => {
        if (!reviewed[target]) {
            const adjList = graph.get(target) || []
            reviewed[target] = true
            if (source === target) {
                return true // has loops
            }
            for (const item of adjList) {
                if (_help(source, item, reviewed)) {
                    return true
                }
            }
        }
        return false
    }
    for (const [source, target] of edges) {
        const reviewed = Array.from({ length: edges.length }, (v, i) => false)
        // before add edge check source can be reached from target if so then we have loops 
        if (_help(source, target, reviewed)) {
            return [source, target]
        }
        graph.has(source) ? graph.get(source).push(target) : graph.set(source, [target])
        graph.has(target) ? graph.get(target).push(source) : graph.set(target, [source])
    }
    return ret
};
// const arr = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
// findRedundantConnection(arr)
// union found


var findRedundantConnectionUnion = function (edges) {
    const union = Array.from({ length: edges.length + 1 }, (v, index) => index)
    const findFather = (node) => {
        let tempNode = node
        while (tempNode !== union[tempNode]) {
            tempNode = union[tempNode]
        }
        return union[tempNode]
    }
    for (const edge of edges) {
        const [source, target] = edge
        const sourceFather = findFather(source)
        const targetFather = findFather(target)
        if (sourceFather !== targetFather) {
            union[targetFather] = union[sourceFather]
        } else {
            return edge
        }
    }
}
const arr = [[3, 4], [1, 2], [2, 4], [3, 5], [2, 5]]
// [[3,4],[1,2],[2,4],[3,5],[2,5]]
findRedundantConnectionUnion(arr)