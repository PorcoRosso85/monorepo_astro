import Sigma from "sigma";
import Graph from "graphology";

import { addingNode } from "../utils/AddNodes";
import { addingEdge } from "../utils/AddEdges";
import { container } from "../utils/gettingContainer";
import { SelectorDefinitions } from "../utils/SelectorDefinitions";

// Graphologyのインスタンスを作成
const graph = new Graph();

addingNode(graph);
addingEdge(graph);

// Sigmaのインスタンスを作成
const renderer = new Sigma(graph, container);

// グラフを描画（通常は不要で、レンダラが自動で描画を管理します）
renderer.refresh();

// Get the dialog and closeBtn elements
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".closeBtn");

// Close button event handler
if (closeBtn) {
  // Close button event handler
  closeBtn.addEventListener("click", () => {
    if (dialog) {
      dialog.close();
    }
  });
}
// Node click event handler
renderer.on("clickNode", (event) => {
  const nodeId = event.node;
  const nodeData = graph.getNodeAttributes(nodeId);

  // Update the dialog content
  const nodeInfo = document.getElementById(SelectorDefinitions.nodeInfo_divId);
  if (nodeInfo) {
    nodeInfo.innerHTML = `
      Node clicked:<br>
      - ID: ${nodeId}<br>
      - X: ${nodeData.x}<br>
      - Y: ${nodeData.y}<br>
      - Color: ${nodeData.color || "N/A"}
    `;
  }

  // Open the dialog
  if (dialog) {
    dialog.showModal();
  }
});
