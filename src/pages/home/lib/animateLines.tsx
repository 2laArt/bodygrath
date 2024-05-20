export type SVGLinesType = NodeListOf<SVGGeometryElement> | undefined;
import gsap from 'gsap';
export const animateLines = (lines: SVGLinesType) => {
  lines?.forEach(line => {
    const length = line.getTotalLength();

    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1,
    });
    gsap.to(line, {
      strokeDashoffset: 0,
      duration: length / 50,
      ease: 'power2.inOut',
    });
  });
};
