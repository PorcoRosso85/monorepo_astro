import Sigma from "sigma";
import Graph from "graphology";

// Graphologyのインスタンスを作成
const graph = new Graph();

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
//
// エッジを追加
graph.addEdge("n1", "n2", { id: "e1" });

// コンテナを取得
const container = document.getElementById("container") as HTMLElement;

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
  const nodeInfo = document.getElementById("nodeInfo");
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
