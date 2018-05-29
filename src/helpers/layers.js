import sketch from "sketch";

export function getFirstSelectedLayer(context) {
  const selectedLayers = context.selection;

  if (selectedLayers.length === 0) {
    context.document.showMessage("⚠️ Select a layer first!");
    return;
  }

  return sketch.fromNative(selectedLayers[0]);
}

export function getClosestFramingRootAncestor(context, layer) {
  const parent = layer.parent;
  if (!parent) {
    // Reached document root without finding anything
    context.document.showMessage(`⚠️ Must have a parent whose name contains "[framing-root]"!`);
    return null;
  }
  if ((parent.name || "").includes("[framing-root]")) return parent;
  return getClosestFramingRootAncestor(context, parent);
}
