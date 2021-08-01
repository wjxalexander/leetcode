var allPathsSourceTarget = function (graph) {
  const ret = [];
  const path = [0];
  const _help = (node, val) => {
    if (val === graph.length - 1) {
      ret.push([...path]);
      return;
    }
    for (const vertice of node) {
      if (path.indexOf(vertice) < 0) {
        path.push(vertice);
        _help(graph[vertice], vertice);
      }
      path.pop();
    }
  };
  _help(graph[0], 0);
  return ret;
};
const graph = [[1, 2], [3], [3], []];
allPathsSourceTarget(graph);
