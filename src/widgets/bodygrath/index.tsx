import React from 'react';

import {
  IGate,
  createChannels,
  gatesCoords,
  getCentersCoords,
} from '@/entities/bogygrath';
import {
  Channel,
  PolygonColorType,
  Rect,
  Triangle,
} from '@/features/bodygrath';

import styles from './styles.module.scss';

const Shapes = {
  rect: Rect,
  triangle: Triangle,
};

interface IProps {
  axisX: number;
  axisY: number;
  active: Set<number>;
}
export const Bodygrath = React.forwardRef<SVGSVGElement, IProps>(
  ({ axisX, axisY, active }, svgRef) => {
    // zoom and location settings
    const ratio = axisY / 450;
    const step = ratio * 115;
    const indexY = 0.2;

    const coords = React.useMemo(() => getCentersCoords(step), [step]);

    const gatesActive: IGate[] = React.useMemo(
      () =>
        gatesCoords.map(i => ({
          ...i,
          isActive: active.has(i.id),
        })),
      [active]
    );
    const channels = React.useMemo(
      () => createChannels(gatesActive),
      [gatesActive]
    );

    return (
      <div>
        <svg
          ref={svgRef}
          className={styles.svg}
          fill="#b1b1b1"
          fontWeight={'lighter'}
          fontFamily="Roboto"
          fontSize={0.09 * step}
          style={{ transform: 'scale(0.8)' }}
        >
          {channels.map((i, idx) => (
            <Channel
              start={{
                id: i.start.id,
                x: axisX + step * i.start.x,
                y: axisY * indexY + step * i.start.y,
                isActive: i.start.isActive,
              }}
              end={{
                id: i.end.id,
                x: axisX + step * i.end.x,
                y: axisY * indexY + step * i.end.y,
                isActive: i.end.isActive,
              }}
              key={idx}
            />
          ))}

          {coords.map(i => {
            const Shape = Shapes[i.type as keyof typeof Shapes];

            return (
              <Shape
                centerX={axisX + (i.x || 0)}
                centerY={axisY * indexY + (i.y || 1)}
                color={i.color as PolygonColorType}
                ratio={ratio}
                rotate={i.rotate}
                size={i.size}
                key={i.name}
              />
            );
          })}

          {gatesActive.map(i => (
            <text
              x={axisX + step * i.x}
              y={axisY * indexY + step * i.y}
              fill={i.isActive ? '#fff' : '#b1b1b1'}
              key={i.id}
            >
              {i.id}
            </text>
          ))}
        </svg>
      </div>
    );
  }
);
