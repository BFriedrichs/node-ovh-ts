/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedRoute } from './ServicesExpandedRoute';
import { ServicesExpandedBilling } from './ServicesExpandedBilling';
import { ServicesExpandedCustomer } from './ServicesExpandedCustomer';
import { ServicesExpandedResource } from './ServicesExpandedResource';

export type ServicesExpandedService = {
  billing: ServicesExpandedBilling;
  customer: ServicesExpandedCustomer;
  parentServiceId: number | null;
  resource: ServicesExpandedResource;
  route: ServicesExpandedRoute | null;
  serviceId: number;
  tags: string;
};
