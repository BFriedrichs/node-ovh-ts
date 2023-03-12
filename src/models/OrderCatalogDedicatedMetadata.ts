/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogDedicatedMetadataFrequency } from './OrderCatalogDedicatedMetadataFrequency';
import { OrderCatalogDedicatedMetadataPrice } from './OrderCatalogDedicatedMetadataPrice';
import { OrderCatalogDedicatedMetadataCapacities } from './OrderCatalogDedicatedMetadataCapacities';
import { OrderCatalogDedicatedMetadataCurrency } from './OrderCatalogDedicatedMetadataCurrency';
import { NichandleOvhSubsidiaryEnum } from './NichandleOvhSubsidiaryEnum';

export type OrderCatalogDedicatedMetadata = {
  catalog: number;
  core: OrderCatalogDedicatedMetadataCapacities;
  currency: OrderCatalogDedicatedMetadataCurrency;
  datacenters: string[];
  frequency: OrderCatalogDedicatedMetadataFrequency;
  merchant: NichandleOvhSubsidiaryEnum;
  price: OrderCatalogDedicatedMetadataPrice;
  ram: OrderCatalogDedicatedMetadataCapacities;
  thread: OrderCatalogDedicatedMetadataCapacities;
  timestamp: number;
};
