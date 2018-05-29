import { getFirstSelectedLayer } from "../helpers/layers";
import { showCopiedToClipboardMessage } from "../helpers/messages";
import { copyStringToClipboard } from "../helpers/clipboard";

export default function(context) {
  const layer = getFirstSelectedLayer(context);
  if (!layer) return;

  const frame = layer.frame();
  copyStringToClipboard(
    `{"x": ${frame.x()}, "y": ${frame.y()}, "width": ${frame.width()}, "height": ${frame.height()}}`
  );

  showCopiedToClipboardMessage(context);
}
