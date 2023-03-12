/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicPromotionDiscountTotal } from './OrderCatalogPublicPromotionDiscountTotal';
import { OrderReductionTypeEnum } from './OrderReductionTypeEnum';

export type OrderCatalogPublicPromotion = {
  description: string;
  discount: OrderCatalogPublicPromotionDiscountTotal;
  duration: number | null;
  endDate: Date | null;
  isGlobalQuantityLimited: boolean;
  name: string;
  quantity: number | null;
  startDate: Date;
  total: OrderCatalogPublicPromotionDiscountTotal;
  type: OrderReductionTypeEnum;
  value: number;
};
