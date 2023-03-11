/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogDedicatedProductSpecificationCPU } from './OrderCatalogDedicatedProductSpecificationCPU';
import { OrderCatalogDedicatedProductSpecificationNetwork } from './OrderCatalogDedicatedProductSpecificationNetwork';
import { OrderCatalogDedicatedProductSpecificationGPU } from './OrderCatalogDedicatedProductSpecificationGPU';
import { OrderCatalogDedicatedProductSpecificationDisk } from './OrderCatalogDedicatedProductSpecificationDisk';
import { OrderCatalogDedicatedProductSpecificationMemory } from './OrderCatalogDedicatedProductSpecificationMemory';

export type OrderCatalogDedicatedProductSpecification = {
  cpu: OrderCatalogDedicatedProductSpecificationCPU | null;
  disks: OrderCatalogDedicatedProductSpecificationDisk | null;
  gpu: OrderCatalogDedicatedProductSpecificationGPU | null;
  memory: OrderCatalogDedicatedProductSpecificationMemory | null;
  network: OrderCatalogDedicatedProductSpecificationNetwork;
};
