import React from 'react';

import debounce from 'debounce';
import { Bodygrath } from '@/widgets/bodygrath';
import { useGSAP } from '@gsap/react';
import { animateLines } from './lib';
import gsap from 'gsap';
import { HDTable } from '@/entities/hd';
import styles from './styles.module.scss';
import { activeGates, leftInfo, rightInfo } from './config';
import { SVGLinesType } from './lib/animateLines';
function Home() {
  const [axisX, setAxisX] = React.useState<number>();
  const [axisY, setAxisY] = React.useState<number>();

  const svgRef = React.useRef<SVGSVGElement>(null);
  const infoRef = React.useRef<HTMLDivElement>(null);

  const active = React.useMemo(() => new Set(activeGates), []);

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setAxisX(innerWidth / 2);
    setAxisY(innerHeight / 2);
  };
  const resizeDelay = debounce(handleResize, 1000);
  React.useEffect(() => {
    setAxisX(window.innerWidth / 2);
    setAxisY(window.innerHeight / 2);
    window.addEventListener('resize', resizeDelay);
    return () => window.removeEventListener('resize', resizeDelay);
  }, [resizeDelay]);

  useGSAP(
    () => {
      const svg = svgRef.current;
      if (!svg) return;
      const channels: SVGLinesType = svg?.querySelectorAll('.channel');
      const active: SVGLinesType = svg?.querySelectorAll('.channel_1');
      const timeline = gsap.timeline();

      timeline
        .to(svg, { scale: 1, ease: 'power2.inOut', duration: 2 })
        .add(() => {
          gsap.to(infoRef.current, { opacity: 1, duration: 1.5 });
          animateLines(channels);
        })
        .add(() => animateLines(active), '+=2.5');
    },
    { scope: svgRef, dependencies: [axisX, axisY, svgRef] }
  );

  if (!axisX || !axisY) return;

  return (
    <div>
      <div ref={infoRef} className={styles.info}>
        <HDTable data={leftInfo} isLeft />

        <HDTable data={rightInfo} isLeft={false} />
      </div>
      <Bodygrath active={active} axisX={axisX} axisY={axisY} ref={svgRef} />
    </div>
  );
}

export default Home;
