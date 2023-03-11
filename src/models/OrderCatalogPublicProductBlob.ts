/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnical } from './OrderCatalogPublicProductBlobTechnical';
import { OrderCatalogPublicProductBlobMarketing } from './OrderCatalogPublicProductBlobMarketing';
import { OrderCatalogPublicProductBlobCommercial } from './OrderCatalogPublicProductBlobCommercial';
import { OrderCatalogPublicProductBlobMeta } from './OrderCatalogPublicProductBlobMeta';

export type OrderCatalogPublicProductBlob = {
  commercial: OrderCatalogPublicProductBlobCommercial | null;
  marketing: OrderCatalogPublicProductBlobMarketing | null;
  meta: OrderCatalogPublicProductBlobMeta | null;
  tags: string | null;
  technical: OrderCatalogPublicProductBlobTechnical | null;
  value: string | null;
};
