/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicDedicatedServerProductBlobTechnicalNetwork } from './OrderCatalogPublicDedicatedServerProductBlobTechnicalNetwork';
import { OrderCatalogPublicDedicatedServerProductBlobTechnicalMemory } from './OrderCatalogPublicDedicatedServerProductBlobTechnicalMemory';
import { OrderCatalogPublicDedicatedServerProductBlobTechnicalServer } from './OrderCatalogPublicDedicatedServerProductBlobTechnicalServer';
import { OrderCatalogPublicDedicatedServerProductBlobTechnicalGPU } from './OrderCatalogPublicDedicatedServerProductBlobTechnicalGPU';
import { OrderCatalogPublicDedicatedServerProductBlobTechnicalCPU } from './OrderCatalogPublicDedicatedServerProductBlobTechnicalCPU';
import { OrderCatalogPublicDedicatedServerProductBlobTechnicalStorage } from './OrderCatalogPublicDedicatedServerProductBlobTechnicalStorage';

export type OrderCatalogPublicDedicatedServerProductBlobTechnical = {
  bandwidth: OrderCatalogPublicDedicatedServerProductBlobTechnicalNetwork | null;
  cpu: OrderCatalogPublicDedicatedServerProductBlobTechnicalCPU | null;
  gpu: OrderCatalogPublicDedicatedServerProductBlobTechnicalGPU | null;
  memory: OrderCatalogPublicDedicatedServerProductBlobTechnicalMemory | null;
  server: OrderCatalogPublicDedicatedServerProductBlobTechnicalServer | null;
  storage: OrderCatalogPublicDedicatedServerProductBlobTechnicalStorage | null;
  vrack: OrderCatalogPublicDedicatedServerProductBlobTechnicalNetwork | null;
};
