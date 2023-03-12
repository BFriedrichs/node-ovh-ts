/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnicalEphemeralStorage } from './OrderCatalogPublicProductBlobTechnicalEphemeralStorage';
import { OrderCatalogPublicProductBlobTechnicalVirtualization } from './OrderCatalogPublicProductBlobTechnicalVirtualization';
import { OrderCatalogPublicProductBlobTechnicalPerSeconds } from './OrderCatalogPublicProductBlobTechnicalPerSeconds';
import { OrderCatalogPublicProductBlobTechnicalOS } from './OrderCatalogPublicProductBlobTechnicalOS';
import { OrderCatalogPublicProductBlobTechnicalMemory } from './OrderCatalogPublicProductBlobTechnicalMemory';
import { OrderCatalogPublicProductBlobTechnicalGPU } from './OrderCatalogPublicProductBlobTechnicalGPU';
import { OrderCatalogPublicProductBlobTechnicalCPU } from './OrderCatalogPublicProductBlobTechnicalCPU';
import { OrderCatalogPublicProductBlobTechnicalDatacenter } from './OrderCatalogPublicProductBlobTechnicalDatacenter';
import { OrderCatalogPublicProductBlobTechnicalServer } from './OrderCatalogPublicProductBlobTechnicalServer';
import { OrderCatalogPublicProductBlobTechnicalStorage } from './OrderCatalogPublicProductBlobTechnicalStorage';
import { OrderCatalogPublicProductBlobConnection } from './OrderCatalogPublicProductBlobConnection';
import { OrderCatalogPublicProductBlobTechnicalNvme } from './OrderCatalogPublicProductBlobTechnicalNvme';
import { OrderCatalogPublicProductBlobTechnicalThroughput } from './OrderCatalogPublicProductBlobTechnicalThroughput';
import { OrderCatalogPublicProductBlobTechnicalNetwork } from './OrderCatalogPublicProductBlobTechnicalNetwork';
import { OrderCatalogPublicProductBlobTechnicalLicense } from './OrderCatalogPublicProductBlobTechnicalLicense';
import { OrderCatalogPublicProductBlobTechnicalVolume } from './OrderCatalogPublicProductBlobTechnicalVolume';
import { OrderCatalogPublicProductBlobTechnicalNodes } from './OrderCatalogPublicProductBlobTechnicalNodes';

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
