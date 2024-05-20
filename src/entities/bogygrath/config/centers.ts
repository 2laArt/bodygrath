export const getCentersCoords = (step: number) => {
  return [
    {
      name: 'head',
      type: 'triangle',
    },
    {
      name: 'ajna',
      type: 'triangle',
      rotate: 180,
      y: step,
    },
    {
      name: 'throat',
      type: 'rect',
      color: 'purple',
      y: step * 2.1,
    },
    {
      name: 'g',
      type: 'rect',
      color: 'yellow',
      rotate: 45,
      y: step * 3.5,
    },
    {
      name: 'sacral',
      type: 'rect',
      color: 'pink',
      y: step * 5,
    },
    {
      name: 'root',
      type: 'rect',
      color: 'purple',
      y: step * 6.25,
    },
    {
      name: 'heart',
      type: 'triangle',
      color: 'pink',
      x: step * 0.8,
      y: step * 3.9,
      rotate: 15,
      size: 80,
    },
    {
      name: 'spleen',
      type: 'triangle',
      color: 'purple',
      x: -step * 2,
      y: step * 5,
      rotate: 90,
    },
    {
      name: 'solar',
      type: 'triangle',
      color: 'purple',
      x: step * 2,
      y: step * 5,
      rotate: 270,
    },
  ];
};
