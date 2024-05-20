import { IPoint } from '@/entities/bogygrath';
import React from 'react';

interface IChannel {
  start: IPoint;
  end: IPoint;
}

export const Channel: React.FC<IChannel> = ({ end, start }) => {
  const width = (gate: IPoint) => (gate.id >= 10 ? 8 : 4);

  // Calculate the center points of each square
  const center1 = { x: start.x + width(start) / 2, y: start.y + 1 / 2 };
  const center2 = { x: end.x + width(end) / 2, y: end.y + 1 / 2 };

  // Calculate the midpoint for the polyline
  const midX = (center1.x + center2.x) / 2;
  const midY = (center1.y + center2.y) / 2;

  return (
    <>
      <line
        className="channel line"
        opacity={0}
        x1={`${center1.x}`}
        y1={`${center1.y}`}
        x2={`${center2.x}`}
        y2={`${center2.y}`}
        stroke="#373737"
      />
      <line
        className="channel_1 line"
        opacity={0}
        x1={`${center1.x}`}
        y1={`${center1.y}`}
        x2={`${midX}`}
        y2={`${midY}`}
        stroke={start.isActive ? '#5f58be' : ''}
      />
      <line
        className="channel_1 line"
        opacity={0}
        stroke={end.isActive ? '#c93c5c' : ''}
        x1={`${center2.x}`}
        y1={`${center2.y}`}
        x2={`${midX}`}
        y2={`${midY}`}
      />
    </>
  );
};
