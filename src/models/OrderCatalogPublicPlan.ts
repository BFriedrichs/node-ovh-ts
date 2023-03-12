/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicConsumptionConfiguration } from './OrderCatalogPublicConsumptionConfiguration';
import { OrderCartGenericProductPricingTypeEnum } from './OrderCartGenericProductPricingTypeEnum';
import { OrderCatalogPublicProductBlob } from './OrderCatalogPublicProductBlob';
import { OrderCatalogPublicConfiguration } from './OrderCatalogPublicConfiguration';
import { OrderCatalogPublicAddonFamily } from './OrderCatalogPublicAddonFamily';
import { OrderCatalogPublicPricing } from './OrderCatalogPublicPricing';

export type OrderCatalogPublicPlan = {
  addonFamilies: OrderCatalogPublicAddonFamily[];
  blobs: OrderCatalogPublicProductBlob | null;
  configurations: OrderCatalogPublicConfiguration[];
  consumptionConfiguration: OrderCatalogPublicConsumptionConfiguration | null;
  family: string | null;
  invoiceName: string;
  planCode: string;
  pricingType: OrderCartGenericProductPricingTypeEnum;
  pricings: OrderCatalogPublicPricing[];
  product: string;
};
