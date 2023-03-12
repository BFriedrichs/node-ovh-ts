/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPccHostStorageSpecifications } from './OrderCatalogPccHostStorageSpecifications';
import { OrderCatalogPccHostMemorySpecifications } from './OrderCatalogPccHostMemorySpecifications';
import { OrderCatalogPccHostNetworkSpecifications } from './OrderCatalogPccHostNetworkSpecifications';
import { OrderCatalogPccHostCpuSpecifications } from './OrderCatalogPccHostCpuSpecifications';

export type OrderCatalogPccHostSpecifications = {
  cpu?: OrderCatalogPccHostCpuSpecifications;
  memory?: OrderCatalogPccHostMemorySpecifications;
  network?: OrderCatalogPccHostNetworkSpecifications[];
  storage?: OrderCatalogPccHostStorageSpecifications;
};
