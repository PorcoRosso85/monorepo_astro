import Graph from "graphology";

export const addingNode = (graph: Graph) => {
  // ノードを追加
  graph.addNode("n1", {
    label: "Node 1",
    x: Math.random(),
    y: Math.random(),
    size: 5,
  });
  graph.addNode("n2", {
    label: "Node 2",
    x: Math.random(),
    y: Math.random(),
    size: 5,
  });
};
