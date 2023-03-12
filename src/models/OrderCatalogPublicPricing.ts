/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicPromotion } from './OrderCatalogPublicPromotion';
import { OrderCartDurationUnitEnum } from './OrderCartDurationUnitEnum';
import { OrderCatalogPublicEngagementConfiguration } from './OrderCatalogPublicEngagementConfiguration';
import { OrderCartGenericProductPricingStrategyEnum } from './OrderCartGenericProductPricingStrategyEnum';
import { OrderCartGenericProductPricingCapacitiesEnum } from './OrderCartGenericProductPricingCapacitiesEnum';
import { OrderCatalogPublicPricingMinMax } from './OrderCatalogPublicPricingMinMax';
import { OrderCartGenericProductPricingTypeEnum } from './OrderCartGenericProductPricingTypeEnum';

export type OrderCatalogPublicPricing = {
  capacities?: OrderCartGenericProductPricingCapacitiesEnum[];
  commitment?: number;
  description?: string;
  engagementConfiguration?: OrderCatalogPublicEngagementConfiguration | null;
  interval?: number;
  intervalUnit?: OrderCartDurationUnitEnum;
  mode?: string;
  mustBeCompleted?: boolean;
  phase?: number;
  price?: number;
  promotions?: OrderCatalogPublicPromotion[] | null;
  quantity?: OrderCatalogPublicPricingMinMax;
  repeat?: OrderCatalogPublicPricingMinMax;
  strategy?: OrderCartGenericProductPricingStrategyEnum;
  tax?: number;
  type?: OrderCartGenericProductPricingTypeEnum;
};
