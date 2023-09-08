import Graph from "graphology";
import AbstractGraph from "graphology-types";

type AddNodeParams = Parameters<AbstractGraph["addNode"]>;

export const addingNode = (graph: Graph) => {
  const params01: AddNodeParams = [
    "n1",
    {
      label: "Node 1",
      x: Math.random(),
      y: Math.random(),
      size: 5,
    },
  ];
  graph.addNode(...params01);

  const params02: AddNodeParams = [
    2,
    {
      label: "Node 2",
      x: Math.random(),
      y: Math.random(),
      size: 5,
    },
  ];
  graph.addNode(...params02);
};
