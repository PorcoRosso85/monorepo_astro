import { container } from "../utils/gettingContainer";
import { graphInstance } from "../service/GraphInstance";
import { rendererInstance } from "../service/RendererInstance";

const renderer = rendererInstance(graphInstance(), container);
renderer.refresh();

import {
  registerCloseButtonEvent,
  registerNodeClickEvent,
} from "../utils/EventHandler";

const closeBtn = document.querySelector(".closeBtn");
if (closeBtn !== null) {
  registerCloseButtonEvent(closeBtn);
  registerNodeClickEvent(renderer);
}
