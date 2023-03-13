import path from 'path-browserify';
import { Position } from 'src/app/models/position';

const rfiPath = path.join(__dirname, '..', 'assets', 'RFI');
const facingRfiPath = path.join(__dirname, '..', 'assets', 'FacingRFI');
const facing3BetPath = path.join(__dirname, '..', 'assets', 'Facing3Bet');
export const assets = path.join(__dirname, '..', 'assets');

export const RFIPositionImageMap: {
  [key in Exclude<Position, Position.BB>]: string;
} = {
  [Position.UTG]: `${rfiPath}/UTG.png`,
  [Position.UTG1]: `${rfiPath}/UTG+1.png`,
  [Position.UTG2]: `${rfiPath}/UTG+2.png`,
  [Position.LJ]: `${rfiPath}/LJ.png`,
  [Position.HJ]: `${rfiPath}/HJ.png`,
  [Position.CO]: `${rfiPath}/CO.png`,
  [Position.BTN]: `${rfiPath}/BTN.png`,
  [Position.SB]: `${rfiPath}/SB.png`,
};

export const FacingRFIImageMap: {
  [key in Exclude<Position, Position.UTG>]: {
    [key: string]: string;
  };
} = {
  [Position.UTG1]: {
    'UTG+1 vs UTG': `${facingRfiPath}/UTG+1/UTG+1_vs_UTG.png`,
  },
  [Position.UTG2]: {
    'UTG+2 vs UTG': `${facingRfiPath}/UTG+2/UTG+2_vs_UTG.png`,
    'UTG+2 vs UTG+1': `${facingRfiPath}/UTG+2/UTG+2_vs_UTG+1.png`,
  },
  [Position.LJ]: {
    'LJ vs UTG': `${facingRfiPath}/LJ/LJ_vs_UTG.png`,
    'LJ vs UTG+1': `${facingRfiPath}/LJ/LJ_vs_UTG+1.png`,
    'LJ vs UTG+2': `${facingRfiPath}/LJ/LJ_vs_UTG+2.png`,
  },
  [Position.HJ]: {
    'HJ vs UTG': `${facingRfiPath}/HJ/HJ_vs_UTG.png`,
    'HJ vs UTG+1': `${facingRfiPath}/HJ/HJ_vs_UTG+1.png`,
    'HJ vs UTG+2': `${facingRfiPath}/HJ/HJ_vs_UTG+2.png`,
    'HJ vs LJ': `${facingRfiPath}/HJ/HJ_vs_LJ.png`,
  },
  [Position.CO]: {
    'CO vs UTG': `${facingRfiPath}/CO/CO_vs_UTG.png`,
    'CO vs UTG+1': `${facingRfiPath}/CO/CO_vs_UTG+1.png`,
    'CO vs UTG+2': `${facingRfiPath}/CO/CO_vs_UTG+2.png`,
    'CO vs LJ': `${facingRfiPath}/CO/CO_vs_LJ.png`,
    'CO vs HJ': `${facingRfiPath}/CO/CO_vs_HJ.png`,
  },
  [Position.BTN]: {
    'BTN vs UTG': `${facingRfiPath}/BTN/BTN_vs_UTG.png`,
    'BTN vs UTG+1': `${facingRfiPath}/BTN/BTN_vs_UTG+1.png`,
    'BTN vs UTG+2': `${facingRfiPath}/BTN/BTN_vs_UTG+2.png`,
    'BTN vs LJ': `${facingRfiPath}/BTN/BTN_vs_LJ.png`,
    'BTN vs HJ': `${facingRfiPath}/BTN/BTN_vs_HJ.png`,
    'BTN vs CO': `${facingRfiPath}/BTN/BTN_vs_CO.png`,
  },
  [Position.SB]: {
    'SB vs UTG': `${facingRfiPath}/SB/SB_vs_UTG.png`,
    'SB vs UTG+1': `${facingRfiPath}/SB/SB_vs_UTG+1.png`,
    'SB vs UTG+2': `${facingRfiPath}/SB/SB_vs_UTG+2.png`,
    'SB vs LJ': `${facingRfiPath}/SB/SB_vs_LJ.png`,
    'SB vs HJ': `${facingRfiPath}/SB/SB_vs_HJ.png`,
    'SB vs CO': `${facingRfiPath}/SB/SB_vs_CO.png`,
    'SB vs BTN': `${facingRfiPath}/SB/SB_vs_BTN.png`,
  },
  [Position.BB]: {
    'BB vs UTG': `${facingRfiPath}/BB/BB_vs_UTG.png`,
    'BB vs UTG+1': `${facingRfiPath}/BB/BB_vs_UTG+1.png`,
    'BB vs UTG+2': `${facingRfiPath}/BB/BB_vs_UTG+2.png`,
    'BB vs LJ': `${facingRfiPath}/BB/BB_vs_LJ.png`,
    'BB vs HJ': `${facingRfiPath}/BB/BB_vs_HJ.png`,
    'BB vs CO': `${facingRfiPath}/BB/BB_vs_CO.png`,
    'BB vs BTN': `${facingRfiPath}/BB/BB_vs_BTN.png`,
    'BB vs SB': `${facingRfiPath}/BB/BB_vs_SB.png`,
  },
};

export const RFIVs3BetImageMap: {
  [key in Exclude<Position, Position.BB>]: {
    [key: string]: string;
  };
} = {
  [Position.UTG]: {
    'UTG vs UTG+1 3bet': `${facing3BetPath}/UTG/UTG_vs_UTG+1_3bet.png`,
    'UTG vs UTG+2 3bet': `${facing3BetPath}/UTG/UTG_vs_UTG+2_3bet.png`,
    'UTG vs LJ 3bet': `${facing3BetPath}/UTG/UTG_vs_LJ_3bet.png`,
    'UTG vs HJ 3bet': `${facing3BetPath}/UTG/UTG_vs_HJ_3bet.png`,
    'UTG vs CO 3bet': `${facing3BetPath}/UTG/UTG_vs_CO_3bet.png`,
    'UTG vs BTN 3bet': `${facing3BetPath}/UTG/UTG_vs_BTN_3bet.png`,
    'UTG vs SB 3bet': `${facing3BetPath}/UTG/UTG_vs_SB_3bet.png`,
    'UTG vs BB 3bet': `${facing3BetPath}/UTG/UTG_vs_BB_3bet.png`,
  },
  [Position.UTG1]: {
    'UTG+1 vs UTG+2 3bet': `${facing3BetPath}/UTG+1/UTG+1_vs_UTG+2_3bet.png`,
    'UTG+1 vs LJ 3bet': `${facing3BetPath}/UTG+1/UTG+1_vs_LJ_3bet.png`,
    'UTG+1 vs HJ 3bet': `${facing3BetPath}/UTG+1/UTG+1_vs_HJ_3bet.png`,
    'UTG+1 vs CO 3bet': `${facing3BetPath}/UTG+1/UTG+1_vs_CO_3bet.png`,
    'UTG+1 vs BTN 3bet': `${facing3BetPath}/UTG+1/UTG+1_vs_BTN_3bet.png`,
    'UTG+1 vs SB 3bet': `${facing3BetPath}/UTG+1/UTG+1_vs_SB_3bet.png`,
    'UTG+1 vs BB 3bet': `${facing3BetPath}/UTG+1/UTG+1_vs_BB_3bet.png`,
  },
  [Position.UTG2]: {
    'UTG+2 vs LJ 3bet': `${facing3BetPath}/UTG+2/UTG+2_vs_LJ_3bet.png`,
    'UTG+2 vs HJ 3bet': `${facing3BetPath}/UTG+2/UTG+2_vs_HJ_3bet.png`,
    'UTG+2 vs CO 3bet': `${facing3BetPath}/UTG+2/UTG+2_vs_CO_3bet.png`,
    'UTG+2 vs BTN 3bet': `${facing3BetPath}/UTG+2/UTG+2_vs_BTN_3bet.png`,
    'UTG+2 vs SB 3bet': `${facing3BetPath}/UTG+2/UTG+2_vs_SB_3bet.png`,
    'UTG+2 vs BB 3bet': `${facing3BetPath}/UTG+2/UTG+2_vs_BB_3bet.png`,
  },
  [Position.LJ]: {
    'LJ vs HJ 3bet': `${facing3BetPath}/LJ/LJ_vs_HJ_3bet.png`,
    'LJ vs CO 3bet': `${facing3BetPath}/LJ/LJ_vs_CO_3bet.png`,
    'LJ vs BTN 3bet': `${facing3BetPath}/LJ/LJ_vs_BTN_3bet.png`,
    'LJ vs SB 3bet': `${facing3BetPath}/LJ/LJ_vs_SB_3bet.png`,
    'LJ vs BB 3bet': `${facing3BetPath}/LJ/LJ_vs_BB_3bet.png`,
  },
  [Position.HJ]: {
    'HJ vs CO 3bet': `${facing3BetPath}/HJ/HJ_vs_CO_3bet.png`,
    'HJ vs BTN 3bet': `${facing3BetPath}/HJ/HJ_vs_BTN_3bet.png`,
    'HJ vs SB 3bet': `${facing3BetPath}/HJ/HJ_vs_SB_3bet.png`,
    'HJ vs BB 3bet': `${facing3BetPath}/HJ/HJ_vs_BB_3bet.png`,
  },
  [Position.CO]: {
    'CO vs BTN 3bet': `${facing3BetPath}/CO/CO_vs_BTN_3bet.png`,
    'CO vs SB 3bet': `${facing3BetPath}/CO/CO_vs_SB_3bet.png`,
    'CO vs BB 3bet': `${facing3BetPath}/CO/CO_vs_BB_3bet.png`,
  },
  [Position.BTN]: {
    'BTN vs SB 3bet': `${facing3BetPath}/BTN/BTN_vs_SB_3bet.png`,
    'BTN vs BB 3bet': `${facing3BetPath}/BTN/BTN_vs_BB_3bet.png`,
  },
  [Position.SB]: {
    'SB vs BB 3bet': `${facing3BetPath}/SB/SB_vs_BB_3bet.png`,
  },
};
