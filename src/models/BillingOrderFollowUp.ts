/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingOrderFollowUpStepEnum } from './BillingOrderFollowUpStepEnum';
import { BillingOrderFollowUpHistory } from './BillingOrderFollowUpHistory';
import { BillingOrderFollowUpStatusEnum } from './BillingOrderFollowUpStatusEnum';

export type BillingOrderFollowUp = {
  history?: BillingOrderFollowUpHistory[];
  status?: BillingOrderFollowUpStatusEnum;
  step?: BillingOrderFollowUpStepEnum;
};
