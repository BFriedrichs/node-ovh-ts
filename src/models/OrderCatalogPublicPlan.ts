/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartGenericProductPricingTypeEnum } from './OrderCartGenericProductPricingTypeEnum';
import { OrderCatalogPublicConsumptionConfiguration } from './OrderCatalogPublicConsumptionConfiguration';
import { OrderCatalogPublicProductBlob } from './OrderCatalogPublicProductBlob';
import { OrderCatalogPublicAddonFamily } from './OrderCatalogPublicAddonFamily';
import { OrderCatalogPublicPricing } from './OrderCatalogPublicPricing';
import { OrderCatalogPublicConfiguration } from './OrderCatalogPublicConfiguration';

export type OrderCatalogPublicPlan = {
  addonFamilies: OrderCatalogPublicAddonFamily;
  blobs: OrderCatalogPublicProductBlob | null;
  configurations: OrderCatalogPublicConfiguration;
  consumptionConfiguration: OrderCatalogPublicConsumptionConfiguration | null;
  family: string | null;
  invoiceName: string;
  planCode: string;
  pricingType: OrderCartGenericProductPricingTypeEnum;
  pricings: OrderCatalogPublicPricing;
  product: string;
};
