/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogDedicatedMetadataCapacities } from './OrderCatalogDedicatedMetadataCapacities';
import { OrderCatalogDedicatedMetadataFrequency } from './OrderCatalogDedicatedMetadataFrequency';
import { NichandleOvhSubsidiaryEnum } from './NichandleOvhSubsidiaryEnum';
import { OrderCatalogDedicatedMetadataPrice } from './OrderCatalogDedicatedMetadataPrice';
import { OrderCatalogDedicatedMetadataCurrency } from './OrderCatalogDedicatedMetadataCurrency';

export type OrderCatalogDedicatedMetadata = {
  catalog: number;
  core: OrderCatalogDedicatedMetadataCapacities;
  currency: OrderCatalogDedicatedMetadataCurrency;
  datacenters: string;
  frequency: OrderCatalogDedicatedMetadataFrequency;
  merchant: NichandleOvhSubsidiaryEnum;
  price: OrderCatalogDedicatedMetadataPrice;
  ram: OrderCatalogDedicatedMetadataCapacities;
  thread: OrderCatalogDedicatedMetadataCapacities;
  timestamp: number;
};
