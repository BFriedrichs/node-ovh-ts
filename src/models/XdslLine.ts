/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLandlineConcentrationPoint } from './XdslLandlineConcentrationPoint';
import { XdslDeconsolidationEnum } from './XdslDeconsolidationEnum';
import { XdslLineSectionLength } from './XdslLineSectionLength';
import { XdslFaultRepairTimeEnum } from './XdslFaultRepairTimeEnum';

export type XdslLine = {
  concentrationPoint?: XdslLandlineConcentrationPoint | null;
  deconsolidation?: XdslDeconsolidationEnum;
  directDistribution?: boolean | null;
  distance?: number;
  faultRepairTime?: XdslFaultRepairTimeEnum;
  lineSectionsLength?: XdslLineSectionLength[];
  mitigation?: number;
  number?: string;
  originalNumber?: string | null;
  portability?: boolean;
  syncDown?: number | null;
  syncUp?: number | null;
};
