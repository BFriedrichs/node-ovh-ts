/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartGenericProductPricingTypeEnum } from './OrderCartGenericProductPricingTypeEnum';
import { OrderCatalogPublicPromotion } from './OrderCatalogPublicPromotion';
import { OrderCartGenericProductPricingStrategyEnum } from './OrderCartGenericProductPricingStrategyEnum';
import { OrderCartDurationUnitEnum } from './OrderCartDurationUnitEnum';
import { OrderCartGenericProductPricingCapacitiesEnum } from './OrderCartGenericProductPricingCapacitiesEnum';
import { OrderCatalogPublicEngagementConfiguration } from './OrderCatalogPublicEngagementConfiguration';
import { OrderCatalogPublicPricingMinMax } from './OrderCatalogPublicPricingMinMax';

export type OrderCatalogPublicPricing = {
  capacities: OrderCartGenericProductPricingCapacitiesEnum;
  commitment: number;
  description: string;
  engagementConfiguration: OrderCatalogPublicEngagementConfiguration | null;
  interval: number;
  intervalUnit: OrderCartDurationUnitEnum;
  mode: string;
  mustBeCompleted: boolean;
  phase: number;
  price: number;
  promotions: OrderCatalogPublicPromotion | null;
  quantity: OrderCatalogPublicPricingMinMax;
  repeat: OrderCatalogPublicPricingMinMax;
  strategy: OrderCartGenericProductPricingStrategyEnum;
  tax: number;
  type: OrderCartGenericProductPricingTypeEnum;
};