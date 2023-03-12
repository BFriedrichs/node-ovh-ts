/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslDeconsolidationEnum } from './XdslDeconsolidationEnum';
import { XdslFaultRepairTimeEnum } from './XdslFaultRepairTimeEnum';
import { XdslLandlineConcentrationPoint } from './XdslLandlineConcentrationPoint';
import { XdslLineSectionLength } from './XdslLineSectionLength';

export type XdslLine = {
  concentrationPoint: XdslLandlineConcentrationPoint | null;
  deconsolidation: XdslDeconsolidationEnum;
  directDistribution: boolean | null;
  distance: number;
  faultRepairTime: XdslFaultRepairTimeEnum;
  lineSectionsLength: XdslLineSectionLength[];
  mitigation: number;
  number: string;
  originalNumber: string | null;
  portability: boolean;
  syncDown: number | null;
  syncUp: number | null;
};
