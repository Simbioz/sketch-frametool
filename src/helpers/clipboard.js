/* global NSPasteboard, NSPasteboardTypeString */

export function copyStringToClipboard(string) {
  const pasteboard = NSPasteboard.generalPasteboard();
  pasteboard.declareTypes_owner([NSPasteboardTypeString], null);
  pasteboard.setString_forType(string, NSPasteboardTypeString);
}
