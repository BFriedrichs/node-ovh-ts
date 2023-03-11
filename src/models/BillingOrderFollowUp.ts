/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingOrderFollowUpStatusEnum } from './BillingOrderFollowUpStatusEnum';
import { BillingOrderFollowUpHistory } from './BillingOrderFollowUpHistory';
import { BillingOrderFollowUpStepEnum } from './BillingOrderFollowUpStepEnum';

export type BillingOrderFollowUp = {
  history: BillingOrderFollowUpHistory;
  status: BillingOrderFollowUpStatusEnum;
  step: BillingOrderFollowUpStepEnum;
};
