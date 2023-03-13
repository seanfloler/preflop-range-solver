import { Position } from './position';
export const positions = [
  Position.BB,
  Position.SB,
  Position.BTN,
  Position.CO,
  Position.HJ,
  Position.LJ,
  Position.UTG2,
  Position.UTG1,
  Position.UTG,
];
export const RFIPositions = positions.slice(1, 9);
export const FacingRFIPositions = positions.slice(0, 8);

