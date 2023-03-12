/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderReductionTypeEnum } from './OrderReductionTypeEnum';
import { OrderCatalogPublicPromotionDiscountTotal } from './OrderCatalogPublicPromotionDiscountTotal';

export type OrderCatalogPublicPromotion = {
  description?: string;
  discount?: OrderCatalogPublicPromotionDiscountTotal;
  duration?: number | null;
  endDate?: Date | null;
  isGlobalQuantityLimited?: boolean;
  name?: string;
  quantity?: number | null;
  startDate?: Date;
  total?: OrderCatalogPublicPromotionDiscountTotal;
  type?: OrderReductionTypeEnum;
  value?: number;
};
