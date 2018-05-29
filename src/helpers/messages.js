export function showCopiedToClipboardMessage(context, name) {
  return context.document.showMessage(`${name} copied to clipboard! 🎉`);
}
