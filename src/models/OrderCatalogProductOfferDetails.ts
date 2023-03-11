/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPricingDefault } from './OrderCatalogPricingDefault';
import { OrderCatalogCloudBlob } from './OrderCatalogCloudBlob';
import { OrderCatalogProduct } from './OrderCatalogProduct';

export type OrderCatalogProductOfferDetails = {
  blobs: OrderCatalogCloudBlob | null;
  metadatas: string | null;
  pricings: OrderCatalogPricingDefault;
  product: OrderCatalogProduct;
};
