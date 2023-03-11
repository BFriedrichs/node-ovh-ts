/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityActivationTypeEnum } from './ConnectivityEligibilityActivationTypeEnum';
import { ConnectivityEligibilityMessage } from './ConnectivityEligibilityMessage';

export type ConnectivityEligibilityOfferEligibility = {
  activationTypes: ConnectivityEligibilityActivationTypeEnum;
  eligible: boolean;
  estimatedDownloadRate: number | null;
  estimatedUploadRate: number | null;
  reasons: ConnectivityEligibilityMessage;
  underConditions: ConnectivityEligibilityMessage;
};
