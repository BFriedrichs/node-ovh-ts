/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceResource } from './ServiceResource';
import { ServiceRenew } from './ServiceRenew';
import { ServiceRoute } from './ServiceRoute';
import { ServicePlan } from './ServicePlan';
import { ServiceBillingStateEnum } from './ServiceBillingStateEnum';

export type ServiceListService = {
  creationDate?: Date;
  details?: string;
  engagementDate?: Date | null;
  expirationDate?: Date | null;
  nextBillingDate?: Date | null;
  plan?: ServicePlan;
  quantity?: number;
  renew?: ServiceRenew | null;
  resource?: ServiceResource;
  route?: ServiceRoute;
  state?: ServiceBillingStateEnum;
};
