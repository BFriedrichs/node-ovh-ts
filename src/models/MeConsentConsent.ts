/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeConsentDecision } from './MeConsentDecision';
import { MeConsentCampaignTypeEnum } from './MeConsentCampaignTypeEnum';

export type MeConsentConsent = {
  campaign: string;
  history: MeConsentDecision[];
  type: MeConsentCampaignTypeEnum;
  value: boolean;
};
