import { getFirstSelectedLayer } from "../helpers/layers";
import { showCopiedToClipboardMessage } from "../helpers/messages";
import { copyStringToClipboard } from "../helpers/clipboard";
import { convertFrameToObject } from "../helpers/frame";

export default function(context) {
  const layer = getFirstSelectedLayer(context);
  if (!layer) return;

  const frame = convertFrameToObject(layer.frame());
  copyStringToClipboard(`{"x": ${frame.x}, "y": ${frame.y}, "width": ${frame.width}, "height": ${frame.height}}`);

  showCopiedToClipboardMessage(context, "Frame");
}
