/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartGenericProductPricing } from './OrderCartGenericProductPricing';
import { OrderCartGenericProductTypeEnum } from './OrderCartGenericProductTypeEnum';

export type OrderCartGenericOptionDefinition = {
  exclusive?: boolean;
  family?: string;
  mandatory?: boolean;
  planCode?: string;
  prices?: OrderCartGenericProductPricing[];
  productName?: string;
  productType?: OrderCartGenericProductTypeEnum;
};
