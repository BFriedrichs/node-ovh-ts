/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnicalFrame } from './OrderCatalogPublicProductBlobTechnicalFrame';
import { OrderCatalogPublicProductBlobTechnicalCPU } from './OrderCatalogPublicProductBlobTechnicalCPU';
import { OrderCatalogPublicProductBlobTechnicalNetwork } from './OrderCatalogPublicProductBlobTechnicalNetwork';
import { OrderCatalogPublicProductBlobTechnicalServices } from './OrderCatalogPublicProductBlobTechnicalServices';

export type OrderCatalogPublicProductBlobTechnicalServer = {
  cpu: OrderCatalogPublicProductBlobTechnicalCPU;
  frame: OrderCatalogPublicProductBlobTechnicalFrame;
  network: OrderCatalogPublicProductBlobTechnicalNetwork | null;
  range: string;
  services: OrderCatalogPublicProductBlobTechnicalServices;
};
