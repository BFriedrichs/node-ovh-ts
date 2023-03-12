/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogCloudBlob } from './OrderCatalogCloudBlob';
import { OrderCatalogPricingDefault } from './OrderCatalogPricingDefault';
import { OrderCatalogProduct } from './OrderCatalogProduct';

export type OrderCatalogProductOfferDetails = {
  blobs: OrderCatalogCloudBlob | null;
  metadatas: string | null;
  pricings: OrderCatalogPricingDefault;
  product: OrderCatalogProduct;
};
