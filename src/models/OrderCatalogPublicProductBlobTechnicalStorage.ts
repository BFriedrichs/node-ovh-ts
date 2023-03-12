/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnicalRaid } from './OrderCatalogPublicProductBlobTechnicalRaid';
import { OrderCatalogPublicProductBlobTechnicalDisk } from './OrderCatalogPublicProductBlobTechnicalDisk';

export type OrderCatalogPublicProductBlobTechnicalStorage = {
  disks?: OrderCatalogPublicProductBlobTechnicalDisk[] | null;
  hotSwap?: boolean | null;
  raid?: string | null;
  raidDetails?: OrderCatalogPublicProductBlobTechnicalRaid | null;
};
