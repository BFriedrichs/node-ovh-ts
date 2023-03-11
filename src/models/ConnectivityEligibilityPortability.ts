/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityPortabilityTypeEnum } from './ConnectivityEligibilityPortabilityTypeEnum';
import { ConnectivityEligibilityPortabilityEligibility } from './ConnectivityEligibilityPortabilityEligibility';

export type ConnectivityEligibilityPortability = {
  eligibility: ConnectivityEligibilityPortabilityEligibility;
  quarantineEndDate: Date | null;
  type: ConnectivityEligibilityPortabilityTypeEnum | null;
};
