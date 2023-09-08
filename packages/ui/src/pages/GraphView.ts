import Sigma from "sigma";
import Graph from "graphology";

import { addingNode } from "../utils/AddNodes";
import { addingEdge } from "../utils/AddEdges";
import { container } from "../utils/gettingContainer";
import { SelectorDefinitions } from "../utils/SelectorDefinitions";
import { graphInstance } from "../service/GraphInstance";
import { rendererInstance } from "../service/RendererInstance";

const renderer = rendererInstance(graphInstance(), container);
renderer.refresh();

import {
  registerCloseButtonEvent,
  registerNodeClickEvent,
} from "../utils/EventHandler";

const closeBtn = document.querySelector(".closeBtn");
registerCloseButtonEvent(closeBtn);
registerNodeClickEvent(renderer);
