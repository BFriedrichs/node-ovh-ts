/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobConnection } from './OrderCatalogPublicProductBlobConnection';
import { OrderCatalogPublicProductBlobTechnicalGPU } from './OrderCatalogPublicProductBlobTechnicalGPU';
import { OrderCatalogPublicProductBlobTechnicalOS } from './OrderCatalogPublicProductBlobTechnicalOS';
import { OrderCatalogPublicProductBlobTechnicalStorage } from './OrderCatalogPublicProductBlobTechnicalStorage';
import { OrderCatalogPublicProductBlobTechnicalDatacenter } from './OrderCatalogPublicProductBlobTechnicalDatacenter';
import { OrderCatalogPublicProductBlobTechnicalEphemeralStorage } from './OrderCatalogPublicProductBlobTechnicalEphemeralStorage';
import { OrderCatalogPublicProductBlobTechnicalThroughput } from './OrderCatalogPublicProductBlobTechnicalThroughput';
import { OrderCatalogPublicProductBlobTechnicalNetwork } from './OrderCatalogPublicProductBlobTechnicalNetwork';
import { OrderCatalogPublicProductBlobTechnicalMemory } from './OrderCatalogPublicProductBlobTechnicalMemory';
import { OrderCatalogPublicProductBlobTechnicalLicense } from './OrderCatalogPublicProductBlobTechnicalLicense';
import { OrderCatalogPublicProductBlobTechnicalVolume } from './OrderCatalogPublicProductBlobTechnicalVolume';
import { OrderCatalogPublicProductBlobTechnicalCPU } from './OrderCatalogPublicProductBlobTechnicalCPU';
import { OrderCatalogPublicProductBlobTechnicalNvme } from './OrderCatalogPublicProductBlobTechnicalNvme';
import { OrderCatalogPublicProductBlobTechnicalServer } from './OrderCatalogPublicProductBlobTechnicalServer';
import { OrderCatalogPublicProductBlobTechnicalNodes } from './OrderCatalogPublicProductBlobTechnicalNodes';
import { OrderCatalogPublicProductBlobTechnicalPerSeconds } from './OrderCatalogPublicProductBlobTechnicalPerSeconds';
import { OrderCatalogPublicProductBlobTechnicalVirtualization } from './OrderCatalogPublicProductBlobTechnicalVirtualization';

export type OrderCatalogPublicProductBlobTechnical = {
  bandwidth: OrderCatalogPublicProductBlobTechnicalNetwork | null;
  connection: OrderCatalogPublicProductBlobConnection | null;
  connectionPerSeconds: OrderCatalogPublicProductBlobTechnicalPerSeconds | null;
  cpu: OrderCatalogPublicProductBlobTechnicalCPU | null;
  datacenter: OrderCatalogPublicProductBlobTechnicalDatacenter | null;
  ephemeralLocalStorage: OrderCatalogPublicProductBlobTechnicalEphemeralStorage | null;
  gpu: OrderCatalogPublicProductBlobTechnicalGPU | null;
  license: OrderCatalogPublicProductBlobTechnicalLicense | null;
  memory: OrderCatalogPublicProductBlobTechnicalMemory | null;
  name: string | null;
  nodes: OrderCatalogPublicProductBlobTechnicalNodes | null;
  nvme: OrderCatalogPublicProductBlobTechnicalNvme | null;
  os: OrderCatalogPublicProductBlobTechnicalOS | null;
  requestPerSeconds: OrderCatalogPublicProductBlobTechnicalPerSeconds | null;
  server: OrderCatalogPublicProductBlobTechnicalServer | null;
  storage: OrderCatalogPublicProductBlobTechnicalStorage | null;
  throughput: OrderCatalogPublicProductBlobTechnicalThroughput | null;
  virtualization: OrderCatalogPublicProductBlobTechnicalVirtualization | null;
  volume: OrderCatalogPublicProductBlobTechnicalVolume | null;
  vrack: OrderCatalogPublicProductBlobTechnicalNetwork | null;
};
