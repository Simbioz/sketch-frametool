export function getFirstSelectedLayer(context) {
  const selectedLayers = context.selection;

  if (selectedLayers.length === 0) {
    context.document.showMessage("Select a layer first!");
    return;
  }

  return selectedLayers[0];
}
