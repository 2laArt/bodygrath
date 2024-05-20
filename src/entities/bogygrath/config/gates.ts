import { IGate } from '../bodygrath';

const headGates: IGate[] = [
  {
    id: 64,
    x: -0.3,
    y: 0.31,
    link: 47,
  },
  {
    id: 61,
    x: -0.05,
    y: 0.31,
    link: 24,
  },
  {
    id: 63,
    x: 0.18,
    y: 0.31,
    link: 4,
  },
];
const ajnaGates: IGate[] = [
  {
    id: 24,
    x: -0.05,
    y: 0.75,
    link: 61,
  },
  {
    id: 47,
    x: -0.3,
    y: 0.75,
    link: 64,
  },
  {
    id: 4,
    x: 0.22,
    y: 0.75,
    link: 65,
  },
  {
    id: 17,
    x: -0.2,
    y: 1,
    link: 62,
  },
  {
    id: 11,
    x: 0.1,
    y: 1,
    link: 56,
  },
  {
    id: 43,
    x: -0.05,
    y: 1.2,
    link: 23,
  },
];

const throatGates: IGate[] = [
  {
    id: 23,
    x: -0.05,
    y: 1.8,
    link: 43,
  },
  {
    id: 62,
    x: -0.25,
    y: 1.8,
    link: 17,
  },
  {
    id: 56,
    x: 0.15,
    y: 1.8,
    link: 11,
  },
  {
    id: 16,
    x: -0.4,
    y: 1.98,
    link: 48,
  },
  {
    id: 20,
    x: -0.4,
    y: 2.3,
    link: 57,
  },
  {
    id: 35,
    x: 0.28,
    y: 1.98,
    link: 36,
  },
  {
    id: 12,
    x: 0.28,
    y: 2.145,
    link: 22,
  },
  {
    id: 45,
    x: 0.28,
    y: 2.31,
    link: 21,
  },
  {
    id: 8,
    x: -0.02,
    y: 2.47,
    link: 1,
  },
  {
    id: 31,
    x: -0.25,
    y: 2.47,
    link: 7,
  },
  {
    id: 33,
    x: 0.15,
    y: 2.47,
    link: 13,
  },
];
const gGate: IGate[] = [
  {
    id: 1,
    x: -0.02,
    y: 3.05,
    link: 8,
  },
  {
    id: 7,
    x: -0.26,
    y: 3.3,
    link: 31,
  },
  {
    id: 13,
    x: 0.18,
    y: 3.3,
    link: 33,
  },
  // !!!!!!!!!!!!!!!!!
  {
    id: 10,
    x: -0.52,
    y: 3.53,
    link: 10,
  },
  {
    id: 25,
    x: 0.42,
    y: 3.53,
    link: 51,
  },
  {
    id: 15,
    x: -0.28,
    y: 3.77,
    link: 5,
  },
  {
    id: 46,
    x: 0.18,
    y: 3.77,
    link: 29,
  },
  {
    id: 2,
    x: -0.02,
    y: 4,
    link: 14,
  },
];
const sacralGate: IGate[] = [
  {
    id: 14,
    x: -0.05,
    y: 4.7,
    link: 2,
  },
  {
    id: 5,
    x: -0.23,
    y: 4.7,
    link: 15,
  },
  {
    id: 29,
    x: 0.15,
    y: 4.7,
    link: 46,
  },
  {
    //!!!!!!!!!!!!!!!!!
    id: 34,
    x: -0.4,
    y: 4.86,
    link: 34,
  },
  {
    id: 27,
    x: -0.4,
    y: 5.18,
    link: 50,
  },

  {
    id: 59,
    x: 0.28,
    y: 5.18,
    link: 6,
  },
  {
    id: 3,
    x: -0.02,
    y: 5.38,
    link: 60,
  },
  {
    id: 42,
    x: -0.25,
    y: 5.38,
    link: 53,
  },
  {
    id: 9,
    x: 0.17,
    y: 5.38,
    link: 52,
  },
];
const rootGates: IGate[] = [
  {
    id: 60,
    x: -0.05,
    y: 5.94,
    link: 3,
  },
  {
    id: 53,
    x: -0.25,
    y: 5.94,
    link: 42,
  },
  {
    id: 52,
    x: 0.15,
    y: 5.94,
    link: 9,
  },
  {
    id: 54,
    x: -0.4,
    y: 6.1,
    link: 32,
  },
  {
    id: 38,
    x: -0.4,
    y: 6.3,
    link: 28,
  },
  {
    id: 58,
    x: -0.4,
    y: 6.5,
    link: 18,
  },
  {
    id: 19,
    x: 0.28,
    y: 6.1,
    link: 49,
  },
  {
    id: 39,
    x: 0.28,
    y: 6.3,
    link: 55,
  },
  {
    id: 41,
    x: 0.28,
    y: 6.5,
    link: 30,
  },
];
const solarGate: IGate[] = [
  {
    id: 6,
    x: 1.75,
    y: 5.03,
    link: 59,
  },
  {
    id: 37,
    x: 1.9,
    y: 4.93,
    link: 40,
  },
  {
    id: 49,
    x: 1.9,
    y: 5.13,
    link: 19,
  },
  {
    id: 22,
    x: 2.08,
    y: 4.83,
    link: 12,
  },
  {
    id: 55,
    x: 2.08,
    y: 5.22,
    link: 39,
  },
  {
    id: 36,
    x: 2.24,
    y: 4.74,
    link: 35,
  },
  {
    id: 30,
    x: 2.24,
    y: 5.31,
    link: 41,
  },
];

const spleenGate: IGate[] = [
  {
    id: 50,
    x: -1.82,
    y: 5.03,
    link: 27,
  },
  {
    id: 44,
    x: -1.99,
    y: 4.94,
    link: 26,
  },
  {
    id: 32,
    x: -1.99,
    y: 5.12,
    link: 54,
  },
  {
    id: 57,
    x: -2.15,
    y: 4.86,
    link: 20,
  },
  {
    id: 28,
    x: -2.15,
    y: 5.22,
    link: 38,
  },
  {
    id: 48,
    x: -2.33,
    y: 4.76,
    link: 16,
  },
  {
    id: 18,
    x: -2.33,
    y: 5.31,
    link: 58,
  },
];
const heartGates: IGate[] = [
  {
    id: 21,
    x: 0.8,
    y: 3.77,
    link: 45,
  },
  {
    id: 51,
    x: 0.65,
    y: 3.92,
    link: 25,
  },
  {
    id: 26,
    x: 0.495,
    y: 4.09,
    link: 44,
  },
  {
    id: 40,
    x: 0.9,
    y: 4.21,
    link: 37,
  },
];

export const gatesCoords: IGate[] = [
  ...heartGates,
  ...headGates,
  ...ajnaGates,
  ...throatGates,
  ...gGate,
  ...sacralGate,
  ...rootGates,
  ...solarGate,
  ...spleenGate,
];
