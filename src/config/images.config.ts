import path from 'path-browserify';
import { Position } from 'src/app/models/position';

const RFI_PATH = path.join(__dirname, '..', 'assets', 'RFI');
const FACING_RFI_PATH = path.join(__dirname, '..', 'assets', 'FacingRFI');

export const RFIPositionImageMap: {
  [key in Exclude<Position, Position.BB>]: string;
} = {
  [Position.UTG]: `${RFI_PATH}/UTG.png`,
  [Position.UTG1]: `${RFI_PATH}/UTG+1.png`,
  [Position.UTG2]: `${RFI_PATH}/UTG+2.png`,
  [Position.LJ]: `${RFI_PATH}/LJ.png`,
  [Position.HJ]: `${RFI_PATH}/HJ.png`,
  [Position.CO]: `${RFI_PATH}/CO.png`,
  [Position.BTN]: `${RFI_PATH}/BTN.png`,
  [Position.SB]: `${RFI_PATH}/SB.png`,
};

export const FacingRFIImageMap: {
  [key in Exclude<Position, Position.UTG>]: {
    [key: string]: string;
  };
} = {
  [Position.UTG1]: {
    'UTG+1 vs UTG': `${FACING_RFI_PATH}/UTG+1/UTG+1_vs_UTG.png`,
  },
  [Position.UTG2]: {
    'UTG+2 vs UTG': `${FACING_RFI_PATH}/UTG+2/UTG+2_vs_UTG.png`,
    'UTG+2 vs UTG+1': `${FACING_RFI_PATH}/UTG+2/UTG+2_vs_UTG+1.png`,
  },
  [Position.LJ]: {
    'LJ vs UTG': `${FACING_RFI_PATH}/LJ/LJ_vs_UTG.png`,
    'LJ vs UTG+1': `${FACING_RFI_PATH}/LJ/LJ_vs_UTG+1.png`,
    'LJ vs UTG+2': `${FACING_RFI_PATH}/LJ/LJ_vs_UTG+2.png`,
  },
  [Position.HJ]: {
    'HJ vs UTG': `${FACING_RFI_PATH}/HJ/HJ_vs_UTG.png`,
    'HJ vs UTG+1': `${FACING_RFI_PATH}/HJ/HJ_vs_UTG+1.png`,
    'HJ vs UTG+2': `${FACING_RFI_PATH}/HJ/HJ_vs_UTG+2.png`,
    'HJ vs LJ': `${FACING_RFI_PATH}/HJ/HJ_vs_LJ.png`,
  },
  [Position.CO]: {
    'CO vs UTG': `${FACING_RFI_PATH}/CO/CO_vs_UTG.png`,
    'CO vs UTG+1': `${FACING_RFI_PATH}/CO/CO_vs_UTG+1.png`,
    'CO vs UTG+2': `${FACING_RFI_PATH}/CO/CO_vs_UTG+2.png`,
    'CO vs LJ': `${FACING_RFI_PATH}/CO/CO_vs_LJ.png`,
    'CO vs HJ': `${FACING_RFI_PATH}/CO/CO_vs_HJ.png`,
  },
  [Position.BTN]: {
    'BTN vs UTG': `${FACING_RFI_PATH}/BTN/BTN_vs_UTG.png`,
    'BTN vs UTG+1': `${FACING_RFI_PATH}/BTN/BTN_vs_UTG+1.png`,
    'BTN vs UTG+2': `${FACING_RFI_PATH}/BTN/BTN_vs_UTG+2.png`,
    'BTN vs LJ': `${FACING_RFI_PATH}/BTN/BTN_vs_LJ.png`,
    'BTN vs HJ': `${FACING_RFI_PATH}/BTN/BTN_vs_HJ.png`,
    'BTN vs CO': `${FACING_RFI_PATH}/BTN/BTN_vs_CO.png`,
  },
  [Position.SB]: {
    'SB vs UTG': `${FACING_RFI_PATH}/SB/SB_vs_UTG.png`,
    'SB vs UTG+1': `${FACING_RFI_PATH}/SB/SB_vs_UTG+1.png`,
    'SB vs UTG+2': `${FACING_RFI_PATH}/SB/SB_vs_UTG+2.png`,
    'SB vs LJ': `${FACING_RFI_PATH}/SB/SB_vs_LJ.png`,
    'SB vs HJ': `${FACING_RFI_PATH}/SB/SB_vs_HJ.png`,
    'SB vs CO': `${FACING_RFI_PATH}/SB/SB_vs_CO.png`,
    'SB vs BTN': `${FACING_RFI_PATH}/SB/SB_vs_BTN.png`,
  },
  [Position.BB]: {
    'BB vs UTG': `${FACING_RFI_PATH}/BB/BB_vs_UTG.png`,
    'BB vs UTG+1': `${FACING_RFI_PATH}/BB/BB_vs_UTG+1.png`,
    'BB vs UTG+2': `${FACING_RFI_PATH}/BB/BB_vs_UTG+2.png`,
    'BB vs LJ': `${FACING_RFI_PATH}/BB/BB_vs_LJ.png`,
    'BB vs HJ': `${FACING_RFI_PATH}/BB/BB_vs_HJ.png`,
    'BB vs CO': `${FACING_RFI_PATH}/BB/BB_vs_CO.png`,
    'BB vs BTN': `${FACING_RFI_PATH}/BB/BB_vs_BTN.png`,
    'BB vs SB': `${FACING_RFI_PATH}/BB/BB_vs_SB.png`,
  },
};
