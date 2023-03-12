/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPccHostMemorySpecifications } from './OrderCatalogPccHostMemorySpecifications';
import { OrderCatalogPccHostNetworkSpecifications } from './OrderCatalogPccHostNetworkSpecifications';
import { OrderCatalogPccHostCpuSpecifications } from './OrderCatalogPccHostCpuSpecifications';
import { OrderCatalogPccHostStorageSpecifications } from './OrderCatalogPccHostStorageSpecifications';

export type OrderCatalogPccHostSpecifications = {
  cpu: OrderCatalogPccHostCpuSpecifications;
  memory: OrderCatalogPccHostMemorySpecifications;
  network: OrderCatalogPccHostNetworkSpecifications[];
  storage: OrderCatalogPccHostStorageSpecifications;
};
