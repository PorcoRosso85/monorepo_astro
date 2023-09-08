import Graph from "graphology";
import Sigma from "sigma";

export const rendererInstance = (
  graphInstance: Graph,
  container: HTMLElement
) => {
  const renderer = new Sigma(graphInstance, container);

  return renderer;
};
