/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobConnection } from './OrderCatalogPublicProductBlobConnection';
import { OrderCatalogPublicProductBlobCommercialPrice } from './OrderCatalogPublicProductBlobCommercialPrice';
import { OrderCatalogPublicProductBlobCommercialFeatures } from './OrderCatalogPublicProductBlobCommercialFeatures';

export type OrderCatalogPublicProductBlobCommercial = {
  brick: string | null;
  brickSubtype: string | null;
  connection: OrderCatalogPublicProductBlobConnection | null;
  features: OrderCatalogPublicProductBlobCommercialFeatures | null;
  line: string | null;
  name: string | null;
  price: OrderCatalogPublicProductBlobCommercialPrice | null;
  range: string | null;
};
