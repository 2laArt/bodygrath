export interface IRotatePoint {
  x: number;
  y: number;
  cx: number;
  cy: number;
  angle: number;
}

// Function to rotate a point around the center
export function rotatePoint({ angle, cx, cy, x, y }: IRotatePoint) {
  const radians = (angle * Math.PI) / 180;
  const dx = x - cx;
  const dy = y - cy;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  return {
    x: cx + dx * cos - dy * sin,
    y: cy + dx * sin + dy * cos,
  };
}
