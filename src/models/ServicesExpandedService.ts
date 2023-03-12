/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedBilling } from './ServicesExpandedBilling';
import { ServicesExpandedRoute } from './ServicesExpandedRoute';
import { ServicesExpandedResource } from './ServicesExpandedResource';
import { ServicesExpandedCustomer } from './ServicesExpandedCustomer';

export type ServicesExpandedService = {
  billing?: ServicesExpandedBilling;
  customer?: ServicesExpandedCustomer;
  parentServiceId?: number | null;
  resource?: ServicesExpandedResource;
  route?: ServicesExpandedRoute | null;
  serviceId?: number;
  tags?: string[];
};
