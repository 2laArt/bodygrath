import { rotatePoint } from '@/entities/bogygrath';
import { IPolygon } from './polygon';
export const Rect: React.FC<IPolygon> = ({
  centerX,
  centerY,
  size = 100,
  rotate = 0,
  ratio = 0,
  className,
  color = 'dark_gray',
  children,
  ...props
}) => {
  // Calculate half the size to determine the rectangle's corners
  const halfSize = (size * ratio) / 2;

  // Calculate the coordinates of the rectangle's corners relative to the center
  const corners = [
    { x: centerX - halfSize, y: centerY - halfSize }, // Top-left corner
    { x: centerX + halfSize, y: centerY - halfSize }, // Top-right corner
    { x: centerX + halfSize, y: centerY + halfSize }, // Bottom-right corner
    { x: centerX - halfSize, y: centerY + halfSize }, // Bottom-left corner
  ];

  // Rotate all corners
  const rotatedCorners = corners.map(corner =>
    rotatePoint({
      x: corner.x,
      y: corner.y,
      cx: centerX,
      cy: centerY,
      angle: rotate,
    })
  );

  // Create the SVG polygon points string
  const points = rotatedCorners
    .map(corner => `${corner.x},${corner.y}`)
    .join(' ');

  // Create the SVG element with a polygon representing the rotated rectangle

  return (
    <polygon
      points={`${points}`}
      className={`${color} ${className}`}
      {...props}
    >
      {children}
    </polygon>
  );
};
