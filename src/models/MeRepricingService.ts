/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedRoute } from './ServicesExpandedRoute';
import { OrderPrice } from './OrderPrice';

export type MeRepricingService = {
  addons: MeRepricingService;
  applicationDate: Date;
  description: string;
  displayName: string;
  duration: string;
  priceAfterWithTax: OrderPrice;
  priceAfterWithoutTax: OrderPrice;
  priceBeforeWithTax: OrderPrice;
  priceBeforeWithoutTax: OrderPrice;
  route: ServicesExpandedRoute | null;
  serviceId: number;
  serviceName: string;
  totalPriceAfterWithTax: OrderPrice;
  totalPriceAfterWithoutTax: OrderPrice;
  totalPriceBeforeWithTax: OrderPrice;
  totalPriceBeforeWithoutTax: OrderPrice;
};
