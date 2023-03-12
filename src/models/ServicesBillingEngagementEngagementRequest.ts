/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderOrder } from './OrderOrder';
import { ServicesBillingPricing } from './ServicesBillingPricing';
import { ServicesBillingEngagementEngagementRequestOption } from './ServicesBillingEngagementEngagementRequestOption';

export type ServicesBillingEngagementEngagementRequest = {
  options?: ServicesBillingEngagementEngagementRequestOption[];
  order?: OrderOrder | null;
  pricing?: ServicesBillingPricing;
  requestDate?: Date;
};
