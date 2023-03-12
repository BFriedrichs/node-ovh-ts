/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnicalDisk } from './OrderCatalogPublicProductBlobTechnicalDisk';
import { OrderCatalogPublicProductBlobTechnicalRaid } from './OrderCatalogPublicProductBlobTechnicalRaid';

export type OrderCatalogPublicProductBlobTechnicalStorage = {
  disks: OrderCatalogPublicProductBlobTechnicalDisk[] | null;
  hotSwap: boolean | null;
  raid: string | null;
  raidDetails: OrderCatalogPublicProductBlobTechnicalRaid | null;
};
