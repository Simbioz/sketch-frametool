import { getFirstSelectedLayer } from "../helpers/layers";
import { showCopiedToClipboardMessage } from "../helpers/messages";
import { copyStringToClipboard } from "../helpers/clipboard";
import { convertFrameToObject } from "../helpers/frame";

export default function(context) {
  const layer = getFirstSelectedLayer(context);
  if (!layer) return;

  const layerFrame = convertFrameToObject(layer.frame());
  const parentFrame = convertFrameToObject(layer.parentGroup().frame());

  const normalizedFrame = {
    x: layerFrame.x / parentFrame.width,
    y: layerFrame.y / parentFrame.height,
    width: layerFrame.width / parentFrame.width,
    height: layerFrame.height / parentFrame.height
  };

  copyStringToClipboard(
    `{"x": ${normalizedFrame.x}, "y": ${normalizedFrame.y}, "width": ${normalizedFrame.width}, "height": ${
      normalizedFrame.height
    }}`
  );

  showCopiedToClipboardMessage(context, "Normalized frame");
}
