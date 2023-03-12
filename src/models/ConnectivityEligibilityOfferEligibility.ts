/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityMessage } from './ConnectivityEligibilityMessage';
import { ConnectivityEligibilityActivationTypeEnum } from './ConnectivityEligibilityActivationTypeEnum';

export type ConnectivityEligibilityOfferEligibility = {
  activationTypes: ConnectivityEligibilityActivationTypeEnum[];
  eligible: boolean;
  estimatedDownloadRate: number | null;
  estimatedUploadRate: number | null;
  reasons: ConnectivityEligibilityMessage[];
  underConditions: ConnectivityEligibilityMessage[];
};
