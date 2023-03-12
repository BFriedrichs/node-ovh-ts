/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { OrderCartGenericProductPricingCapacitiesEnum } from './OrderCartGenericProductPricingCapacitiesEnum';
import { OrderCartGenericProductPricingTypeEnum } from './OrderCartGenericProductPricingTypeEnum';

export type OrderCartGenericProductPricing = {
  capacities?: OrderCartGenericProductPricingCapacitiesEnum[];
  description?: string;
  duration?: number;
  interval?: number;
  maximumQuantity?: number | null;
  maximumRepeat?: number | null;
  minimumQuantity?: number;
  minimumRepeat?: number;
  price?: OrderPrice;
  priceInUcents?: number;
  pricingMode?: string;
  pricingType?: OrderCartGenericProductPricingTypeEnum;
};
