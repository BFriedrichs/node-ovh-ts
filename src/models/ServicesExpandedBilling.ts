/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedEngagementSummary } from './ServicesExpandedEngagementSummary';
import { ServicesExpandedEngagementRequestSummary } from './ServicesExpandedEngagementRequestSummary';
import { ServicesBillingPricing } from './ServicesBillingPricing';
import { ServicesExpandedRenew } from './ServicesExpandedRenew';
import { ServicesExpandedPlan } from './ServicesExpandedPlan';
import { ServicesExpandedLifecycle } from './ServicesExpandedLifecycle';
import { ServicesExpandedGroup } from './ServicesExpandedGroup';

export type ServicesExpandedBilling = {
  engagement?: ServicesExpandedEngagementSummary | null;
  engagementRequest?: ServicesExpandedEngagementRequestSummary | null;
  expirationDate?: Date | null;
  group?: ServicesExpandedGroup | null;
  lifecycle?: ServicesExpandedLifecycle | null;
  nextBillingDate?: Date | null;
  plan?: ServicesExpandedPlan | null;
  pricing?: ServicesBillingPricing | null;
  renew?: ServicesExpandedRenew | null;
};
