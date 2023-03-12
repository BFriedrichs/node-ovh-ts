/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedCustomer } from './ServicesExpandedCustomer';
import { ServicesExpandedBilling } from './ServicesExpandedBilling';
import { ServicesExpandedResource } from './ServicesExpandedResource';
import { ServicesExpandedRoute } from './ServicesExpandedRoute';

export type ServicesExpandedService = {
  billing: ServicesExpandedBilling;
  customer: ServicesExpandedCustomer;
  parentServiceId: number | null;
  resource: ServicesExpandedResource;
  route: ServicesExpandedRoute | null;
  serviceId: number;
  tags: string[];
};
