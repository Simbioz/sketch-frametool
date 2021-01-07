import { getFirstSelectedLayer } from "../helpers/layers";
import { showCopiedToClipboardMessage } from "../helpers/messages";
import { copyStringToClipboard } from "../helpers/clipboard";
import { getNormalizedFrame } from "../helpers/frames";

export default function (context) {
  const layer = getFirstSelectedLayer(context);
  if (!layer) return;

  const normalizedFrame = getNormalizedFrame(context, layer);
  const point = { x: normalizedFrame.x + normalizedFrame.width, y: normalizedFrame.y };

  copyStringToClipboard(`{"x": ${point.x}, "y": ${point.y}}`);
  showCopiedToClipboardMessage(context, "Top right corner position");
}
