/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityLineStatusEnum } from './ConnectivityEligibilityLineStatusEnum';
import { ConnectivityEligibilitySectionLength } from './ConnectivityEligibilitySectionLength';

export type ConnectivityEligibilityCopperInfo = {
  availablePairs: number | null;
  maxAvailablePairs: number | null;
  nra: string | null;
  sectionsLengths: ConnectivityEligibilitySectionLength[];
  status: ConnectivityEligibilityLineStatusEnum;
  underConstruction: boolean | null;
  unlistedNumber: boolean;
};
