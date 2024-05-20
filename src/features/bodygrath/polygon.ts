import React from 'react';
export type PolygonColorType = 'purple' | 'pink' | 'dark_gray' | 'yellow';
export interface IPolygon extends React.SVGProps<SVGPolygonElement> {
  centerX: number;
  centerY: number;
  size?: number;
  rotate?: number;
  ratio?: number;
  color?: PolygonColorType;
  className?: string;
  children?: React.ReactNode;
}
