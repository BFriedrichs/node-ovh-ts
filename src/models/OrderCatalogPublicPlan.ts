/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicConfiguration } from './OrderCatalogPublicConfiguration';
import { OrderCatalogPublicConsumptionConfiguration } from './OrderCatalogPublicConsumptionConfiguration';
import { OrderCatalogPublicAddonFamily } from './OrderCatalogPublicAddonFamily';
import { OrderCatalogPublicProductBlob } from './OrderCatalogPublicProductBlob';
import { OrderCatalogPublicPricing } from './OrderCatalogPublicPricing';
import { OrderCartGenericProductPricingTypeEnum } from './OrderCartGenericProductPricingTypeEnum';

export type OrderCatalogPublicPlan = {
  addonFamilies?: OrderCatalogPublicAddonFamily[];
  blobs?: OrderCatalogPublicProductBlob | null;
  configurations?: OrderCatalogPublicConfiguration[];
  consumptionConfiguration?: OrderCatalogPublicConsumptionConfiguration | null;
  family?: string | null;
  invoiceName?: string;
  planCode?: string;
  pricingType?: OrderCartGenericProductPricingTypeEnum;
  pricings?: OrderCatalogPublicPricing[];
  product?: string;
};
