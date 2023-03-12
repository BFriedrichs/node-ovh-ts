/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogCloudBlob } from './OrderCatalogCloudBlob';
import { OrderCatalogProduct } from './OrderCatalogProduct';
import { OrderCatalogPricingDefault } from './OrderCatalogPricingDefault';

export type OrderCatalogProductOfferDetails = {
  blobs?: OrderCatalogCloudBlob | null;
  metadatas?: string | null;
  pricings?: OrderCatalogPricingDefault;
  product?: OrderCatalogProduct;
};
