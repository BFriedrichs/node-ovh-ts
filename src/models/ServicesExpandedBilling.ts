/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedGroup } from './ServicesExpandedGroup';
import { ServicesExpandedEngagementSummary } from './ServicesExpandedEngagementSummary';
import { ServicesBillingPricing } from './ServicesBillingPricing';
import { ServicesExpandedEngagementRequestSummary } from './ServicesExpandedEngagementRequestSummary';
import { ServicesExpandedRenew } from './ServicesExpandedRenew';
import { ServicesExpandedPlan } from './ServicesExpandedPlan';
import { ServicesExpandedLifecycle } from './ServicesExpandedLifecycle';

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
