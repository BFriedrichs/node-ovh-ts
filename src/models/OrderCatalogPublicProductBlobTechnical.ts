/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProductBlobTechnicalPerSeconds } from './OrderCatalogPublicProductBlobTechnicalPerSeconds';
import { OrderCatalogPublicProductBlobTechnicalDatacenter } from './OrderCatalogPublicProductBlobTechnicalDatacenter';
import { OrderCatalogPublicProductBlobTechnicalGPU } from './OrderCatalogPublicProductBlobTechnicalGPU';
import { OrderCatalogPublicProductBlobTechnicalLicense } from './OrderCatalogPublicProductBlobTechnicalLicense';
import { OrderCatalogPublicProductBlobTechnicalNetwork } from './OrderCatalogPublicProductBlobTechnicalNetwork';
import { OrderCatalogPublicProductBlobTechnicalThroughput } from './OrderCatalogPublicProductBlobTechnicalThroughput';
import { OrderCatalogPublicProductBlobTechnicalEphemeralStorage } from './OrderCatalogPublicProductBlobTechnicalEphemeralStorage';
import { OrderCatalogPublicProductBlobTechnicalNodes } from './OrderCatalogPublicProductBlobTechnicalNodes';
import { OrderCatalogPublicProductBlobTechnicalOS } from './OrderCatalogPublicProductBlobTechnicalOS';
import { OrderCatalogPublicProductBlobTechnicalCPU } from './OrderCatalogPublicProductBlobTechnicalCPU';
import { OrderCatalogPublicProductBlobTechnicalVirtualization } from './OrderCatalogPublicProductBlobTechnicalVirtualization';
import { OrderCatalogPublicProductBlobTechnicalNvme } from './OrderCatalogPublicProductBlobTechnicalNvme';
import { OrderCatalogPublicProductBlobTechnicalMemory } from './OrderCatalogPublicProductBlobTechnicalMemory';
import { OrderCatalogPublicProductBlobTechnicalServer } from './OrderCatalogPublicProductBlobTechnicalServer';
import { OrderCatalogPublicProductBlobTechnicalVolume } from './OrderCatalogPublicProductBlobTechnicalVolume';
import { OrderCatalogPublicProductBlobConnection } from './OrderCatalogPublicProductBlobConnection';
import { OrderCatalogPublicProductBlobTechnicalStorage } from './OrderCatalogPublicProductBlobTechnicalStorage';

export type OrderCatalogPublicProductBlobTechnical = {
  bandwidth?: OrderCatalogPublicProductBlobTechnicalNetwork | null;
  connection?: OrderCatalogPublicProductBlobConnection | null;
  connectionPerSeconds?: OrderCatalogPublicProductBlobTechnicalPerSeconds | null;
  cpu?: OrderCatalogPublicProductBlobTechnicalCPU | null;
  datacenter?: OrderCatalogPublicProductBlobTechnicalDatacenter | null;
  ephemeralLocalStorage?: OrderCatalogPublicProductBlobTechnicalEphemeralStorage | null;
  gpu?: OrderCatalogPublicProductBlobTechnicalGPU | null;
  license?: OrderCatalogPublicProductBlobTechnicalLicense | null;
  memory?: OrderCatalogPublicProductBlobTechnicalMemory | null;
  name?: string | null;
  nodes?: OrderCatalogPublicProductBlobTechnicalNodes | null;
  nvme?: OrderCatalogPublicProductBlobTechnicalNvme | null;
  os?: OrderCatalogPublicProductBlobTechnicalOS | null;
  requestPerSeconds?: OrderCatalogPublicProductBlobTechnicalPerSeconds | null;
  server?: OrderCatalogPublicProductBlobTechnicalServer | null;
  storage?: OrderCatalogPublicProductBlobTechnicalStorage | null;
  throughput?: OrderCatalogPublicProductBlobTechnicalThroughput | null;
  virtualization?: OrderCatalogPublicProductBlobTechnicalVirtualization | null;
  volume?: OrderCatalogPublicProductBlobTechnicalVolume | null;
  vrack?: OrderCatalogPublicProductBlobTechnicalNetwork | null;
};
