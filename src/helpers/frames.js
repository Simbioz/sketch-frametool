import { getClosestFramingRootAncestor } from "./layers";

export function getNormalizedFrame(context, layer) {
  const framingRootLayer = getClosestFramingRootAncestor(context, layer);
  if (!framingRootLayer) return;

  const layerFrame = layer.frame.changeBasis({ from: layer.parent, to: framingRootLayer });

  return {
    x: layerFrame.x / framingRootLayer.frame.width,
    y: layerFrame.y / framingRootLayer.frame.height,
    width: layerFrame.width / framingRootLayer.frame.width,
    height: layerFrame.height / framingRootLayer.frame.height
  };
}
