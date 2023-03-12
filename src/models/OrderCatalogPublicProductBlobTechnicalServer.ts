/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnicalServices } from './OrderCatalogPublicProductBlobTechnicalServices';
import { OrderCatalogPublicProductBlobTechnicalCPU } from './OrderCatalogPublicProductBlobTechnicalCPU';
import { OrderCatalogPublicProductBlobTechnicalFrame } from './OrderCatalogPublicProductBlobTechnicalFrame';
import { OrderCatalogPublicProductBlobTechnicalNetwork } from './OrderCatalogPublicProductBlobTechnicalNetwork';

export type OrderCatalogPublicProductBlobTechnicalServer = {
  cpu?: OrderCatalogPublicProductBlobTechnicalCPU;
  frame?: OrderCatalogPublicProductBlobTechnicalFrame;
  network?: OrderCatalogPublicProductBlobTechnicalNetwork | null;
  range?: string;
  services?: OrderCatalogPublicProductBlobTechnicalServices;
};
