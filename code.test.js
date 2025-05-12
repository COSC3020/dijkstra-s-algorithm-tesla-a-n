const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

const testLinearGraph = jsc.forall("bool", function() {
  const graph = [
    [0, 1, Infinity],
    [Infinity, 0, 1],
    [Infinity, Infinity, 0]
  ];
  
  const distances = dijkstra(graph, 0);
  return distances[0] === 0 && distances[1] === 1 && distances[2] === 2;
});

const testMultiPathGraph = jsc.forall("bool", function() {
  const graph = [
    [0, 4, 1],
    [Infinity, 0, Infinity],
    [Infinity, 2, 0]
  ];
  
  const distances = dijkstra(graph, 0);
  return distances[0] === 0 && distances[1] === 3 && distances[2] === 1;
});

const testUnreachableNodes = jsc.forall("bool", function() {
  const graph = [
    [0, 5, Infinity],
    [Infinity, 0, Infinity],
    [Infinity, Infinity, 0]
  ];
  
  const distances = dijkstra(graph, 0);
  return distances[0] === 0 && distances[1] === 5 && distances[2] === Infinity;
});

const testLargerGraph = jsc.forall("bool", function() {
  const graph = [
    [0, 10, Infinity, 5, Infinity],
    [Infinity, 0, 1, Infinity, Infinity],
    [Infinity, Infinity, 0, Infinity, 4],
    [Infinity, 3, 9, 0, 2],
    [Infinity, Infinity, Infinity, Infinity, 0]
  ];
  
  const distances = dijkstra(graph, 0);
  
  const expectedDistances = [0, 8, 9, 5, 7];
  
  for (let i = 0; i < expectedDistances.length; i++) {
    if (distances[i] !== expectedDistances[i]) {
      return false;
    }
  }
  return true;
});

const testSourceNode = jsc.forall("bool", function() {
  const graph = [
    [0, 1, 2],
    [Infinity, 0, 3],
    [Infinity, Infinity, 0]
  ];
  
  for (let i = 0; i < graph.length; i++) {
    const distances = dijkstra(graph, i);
    if (distances[i] !== 0) {
      return false;
    }
  }
  return true;
});

jsc.assert(testLinearGraph);
jsc.assert(testMultiPathGraph);
jsc.assert(testUnreachableNodes);
jsc.assert(testLargerGraph);
jsc.assert(testSourceNode);
