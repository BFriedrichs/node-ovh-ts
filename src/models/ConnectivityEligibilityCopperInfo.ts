/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilitySectionLength } from './ConnectivityEligibilitySectionLength';
import { ConnectivityEligibilityLineStatusEnum } from './ConnectivityEligibilityLineStatusEnum';

export type ConnectivityEligibilityCopperInfo = {
  availablePairs?: number | null;
  maxAvailablePairs?: number | null;
  nra?: string | null;
  sectionsLengths?: ConnectivityEligibilitySectionLength[];
  status?: ConnectivityEligibilityLineStatusEnum;
  underConstruction?: boolean | null;
  unlistedNumber?: boolean;
};
