import Graph from "graphology";
import Sigma from "sigma";

export const rendererInstance = (
  graphInstance: Graph,
  container: HTMLElement
): Sigma => {
  const renderer = new Sigma(graphInstance, container);

  return renderer;
};
