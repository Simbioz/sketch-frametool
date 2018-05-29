export function convertFrameToObject(frame) {
  return { x: frame.x(), y: frame.y(), width: frame.width(), height: frame.height() };
}
