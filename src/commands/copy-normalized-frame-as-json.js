import { getFirstSelectedLayer, getClosestFramingRootAncestor } from "../helpers/layers";
import { showCopiedToClipboardMessage } from "../helpers/messages";
import { copyStringToClipboard } from "../helpers/clipboard";

export default function(context) {
  const layer = getFirstSelectedLayer(context);
  if (!layer) return;

  const framingRootLayer = getClosestFramingRootAncestor(context, layer);
  if (!framingRootLayer) return;

  const layerFrame = layer.frame.changeBasis({ from: layer.parent, to: framingRootLayer });

  const normalizedFrame = {
    x: layerFrame.x / framingRootLayer.frame.width,
    y: layerFrame.y / framingRootLayer.frame.height,
    width: layerFrame.width / framingRootLayer.frame.width,
    height: layerFrame.height / framingRootLayer.frame.height
  };

  copyStringToClipboard(
    `{"x": ${normalizedFrame.x}, "y": ${normalizedFrame.y}, "width": ${normalizedFrame.width}, "height": ${
      normalizedFrame.height
    }}`
  );

  showCopiedToClipboardMessage(context, "Normalized frame");
}
