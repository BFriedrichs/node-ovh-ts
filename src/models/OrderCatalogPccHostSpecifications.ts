/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPccHostStorageSpecifications } from './OrderCatalogPccHostStorageSpecifications';
import { OrderCatalogPccHostNetworkSpecifications } from './OrderCatalogPccHostNetworkSpecifications';
import { OrderCatalogPccHostCpuSpecifications } from './OrderCatalogPccHostCpuSpecifications';
import { OrderCatalogPccHostMemorySpecifications } from './OrderCatalogPccHostMemorySpecifications';

export type OrderCatalogPccHostSpecifications = {
  cpu: OrderCatalogPccHostCpuSpecifications;
  memory: OrderCatalogPccHostMemorySpecifications;
  network: OrderCatalogPccHostNetworkSpecifications;
  storage: OrderCatalogPccHostStorageSpecifications;
};
