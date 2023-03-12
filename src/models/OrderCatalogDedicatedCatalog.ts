/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogDedicatedMetadata } from './OrderCatalogDedicatedMetadata';
import { OrderCatalogDedicatedFamily } from './OrderCatalogDedicatedFamily';
import { OrderCatalogDedicatedTechDetails } from './OrderCatalogDedicatedTechDetails';
import { OrderCatalogDedicatedProduct } from './OrderCatalogDedicatedProduct';

export type OrderCatalogDedicatedCatalog = {
  families?: OrderCatalogDedicatedFamily[];
  metadatas?: OrderCatalogDedicatedMetadata;
  products?: OrderCatalogDedicatedProduct[];
  techDetails?: OrderCatalogDedicatedTechDetails[];
};
