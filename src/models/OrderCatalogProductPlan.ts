/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogProductOfferDetails } from './OrderCatalogProductOfferDetails';
import { OrderCatalogAddonItem } from './OrderCatalogAddonItem';
import { OrderCatalogCloudRegionPrice } from './OrderCatalogCloudRegionPrice';

export type OrderCatalogProductPlan = {
  addonsFamily: OrderCatalogAddonItem;
  consumptionBillingStrategy: string | null;
  details: OrderCatalogProductOfferDetails;
  familyName: string | null;
  invoiceName: string;
  planCode: string;
  prices: OrderCatalogCloudRegionPrice | null;
  pricingType: string;
};
