/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesBillingPricingEngagementConfiguration } from './ServicesBillingPricingEngagementConfiguration';
import { OrderCartGenericProductPricingCapacitiesEnum } from './OrderCartGenericProductPricingCapacitiesEnum';
import { OrderPrice } from './OrderPrice';
import { OrderCartGenericProductPricingTypeEnum } from './OrderCartGenericProductPricingTypeEnum';

export type ServicesBillingPricing = {
  capacities: OrderCartGenericProductPricingCapacitiesEnum[];
  description: string;
  duration: number;
  engagementConfiguration: ServicesBillingPricingEngagementConfiguration | null;
  interval: number;
  maximumQuantity: number | null;
  maximumRepeat: number | null;
  minimumQuantity: number;
  minimumRepeat: number;
  price: OrderPrice;
  priceInUcents: number;
  pricingMode: string;
  pricingType: OrderCartGenericProductPricingTypeEnum;
};
