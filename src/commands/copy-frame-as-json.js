import { getFirstSelectedLayer } from "../helpers/layers";
import { showCopiedToClipboardMessage } from "../helpers/messages";
import { copyStringToClipboard } from "../helpers/clipboard";
import { getNormalizedFrame } from "../helpers/frames";

export default function(context) {
  const layer = getFirstSelectedLayer(context);
  if (!layer) return;

  const normalizedFrame = getNormalizedFrame(context, layer);

  copyStringToClipboard(
    `{"x": ${normalizedFrame.x}, "y": ${normalizedFrame.y}, "width": ${normalizedFrame.width}, "height": ${
      normalizedFrame.height
    }}`
  );

  showCopiedToClipboardMessage(context, "Normalized frame");
}
