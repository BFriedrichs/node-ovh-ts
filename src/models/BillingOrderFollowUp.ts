/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingOrderFollowUpHistory } from './BillingOrderFollowUpHistory';
import { BillingOrderFollowUpStatusEnum } from './BillingOrderFollowUpStatusEnum';
import { BillingOrderFollowUpStepEnum } from './BillingOrderFollowUpStepEnum';

export type BillingOrderFollowUp = {
  history: BillingOrderFollowUpHistory[];
  status: BillingOrderFollowUpStatusEnum;
  step: BillingOrderFollowUpStepEnum;
};
