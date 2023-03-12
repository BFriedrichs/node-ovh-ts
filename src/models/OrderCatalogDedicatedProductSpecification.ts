/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogDedicatedProductSpecificationNetwork } from './OrderCatalogDedicatedProductSpecificationNetwork';
import { OrderCatalogDedicatedProductSpecificationDisk } from './OrderCatalogDedicatedProductSpecificationDisk';
import { OrderCatalogDedicatedProductSpecificationMemory } from './OrderCatalogDedicatedProductSpecificationMemory';
import { OrderCatalogDedicatedProductSpecificationGPU } from './OrderCatalogDedicatedProductSpecificationGPU';
import { OrderCatalogDedicatedProductSpecificationCPU } from './OrderCatalogDedicatedProductSpecificationCPU';

export type OrderCatalogDedicatedProductSpecification = {
  cpu?: OrderCatalogDedicatedProductSpecificationCPU | null;
  disks?: OrderCatalogDedicatedProductSpecificationDisk[] | null;
  gpu?: OrderCatalogDedicatedProductSpecificationGPU | null;
  memory?: OrderCatalogDedicatedProductSpecificationMemory | null;
  network?: OrderCatalogDedicatedProductSpecificationNetwork;
};
