/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceBillingStateEnum } from './ServiceBillingStateEnum';
import { ServicePlan } from './ServicePlan';
import { ServiceResource } from './ServiceResource';
import { ServiceRenew } from './ServiceRenew';
import { ServiceRoute } from './ServiceRoute';

export type ServiceListService = {
  creationDate: Date;
  details: string;
  engagementDate: Date | null;
  expirationDate: Date | null;
  nextBillingDate: Date | null;
  plan: ServicePlan;
  quantity: number;
  renew: ServiceRenew | null;
  resource: ServiceResource;
  route: ServiceRoute;
  state: ServiceBillingStateEnum;
};
