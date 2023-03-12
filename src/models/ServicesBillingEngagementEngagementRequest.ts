/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesBillingEngagementEngagementRequestOption } from './ServicesBillingEngagementEngagementRequestOption';
import { ServicesBillingPricing } from './ServicesBillingPricing';
import { OrderOrder } from './OrderOrder';

export type ServicesBillingEngagementEngagementRequest = {
  options: ServicesBillingEngagementEngagementRequestOption[];
  order: OrderOrder | null;
  pricing: ServicesBillingPricing;
  requestDate: Date;
};
