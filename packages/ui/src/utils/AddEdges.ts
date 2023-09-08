import Graph from "graphology";

export const addingEdge = (graph: Graph) => {
  // エッジを追加
  graph.addEdge("n1", 2, { id: "e1" });
};
