/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedEngagementRequestSummary } from './ServicesExpandedEngagementRequestSummary';
import { ServicesExpandedPlan } from './ServicesExpandedPlan';
import { ServicesBillingPricing } from './ServicesBillingPricing';
import { ServicesExpandedLifecycle } from './ServicesExpandedLifecycle';
import { ServicesExpandedGroup } from './ServicesExpandedGroup';
import { ServicesExpandedRenew } from './ServicesExpandedRenew';
import { ServicesExpandedEngagementSummary } from './ServicesExpandedEngagementSummary';

export type ServicesExpandedBilling = {
  engagement: ServicesExpandedEngagementSummary | null;
  engagementRequest: ServicesExpandedEngagementRequestSummary | null;
  expirationDate: Date | null;
  group: ServicesExpandedGroup | null;
  lifecycle: ServicesExpandedLifecycle | null;
  nextBillingDate: Date | null;
  plan: ServicesExpandedPlan | null;
  pricing: ServicesBillingPricing | null;
  renew: ServicesExpandedRenew | null;
};
