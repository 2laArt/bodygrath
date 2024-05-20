import React from 'react';
import { IPolygon } from './polygon';
import { rotatePoint } from '@/entities/bogygrath';
export const Triangle: React.FC<IPolygon> = ({
  centerX,
  centerY,
  size = 100,
  rotate = 0,
  ratio = 1,
  color = 'dark_gray',
  className,
  children,
  ...props
}) => {
  // Calculate the height of the triangle using the size
  const width = size * ratio;
  const height = (width * Math.sqrt(3)) / 2;

  // Calculate the coordinates of the triangle's vertices relative to the center
  const vertices = [
    { x: centerX, y: centerY - height / 2 }, // Top vertex
    { x: centerX - width / 2, y: centerY + height / 2 }, // Bottom left vertex
    { x: centerX + width / 2, y: centerY + height / 2 }, // Bottom right vertex
  ];

  // Rotate all vertices
  const rotatedVertices = vertices.map(vertex =>
    rotatePoint({
      x: vertex.x,
      y: vertex.y,
      cx: centerX,
      cy: centerY,
      angle: rotate,
    })
  );

  // Create the SVG polygon points string
  const points = rotatedVertices
    .map(vertex => `${vertex.x},${vertex.y}`)
    .join(' ');

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
