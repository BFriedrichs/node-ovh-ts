/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartGenericProductTypeEnum } from './OrderCartGenericProductTypeEnum';
import { OrderCartGenericProductPricing } from './OrderCartGenericProductPricing';

export type OrderCartGenericProductDefinition = {
  planCode: string;
  prices: OrderCartGenericProductPricing;
  productName: string;
  productType: OrderCartGenericProductTypeEnum;
};
