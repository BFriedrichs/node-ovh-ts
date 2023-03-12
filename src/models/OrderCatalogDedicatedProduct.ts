/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogDedicatedProductCompatibility } from './OrderCatalogDedicatedProductCompatibility';
import { OrderCatalogDedicatedProductAddonItem } from './OrderCatalogDedicatedProductAddonItem';
import { OrderCatalogDedicatedProductAddonFamily } from './OrderCatalogDedicatedProductAddonFamily';
import { OrderCatalogDedicatedProductSpecification } from './OrderCatalogDedicatedProductSpecification';
import { OrderCatalogDedicatedProductPrice } from './OrderCatalogDedicatedProductPrice';

export type OrderCatalogDedicatedProduct = {
  addonsFamily: OrderCatalogDedicatedProductAddonFamily[];
  code: string;
  compatibilities: OrderCatalogDedicatedProductCompatibility[] | null;
  datacenters: string[];
  derivatives: OrderCatalogDedicatedProductAddonItem[] | null;
  family: string;
  invoiceName: string;
  isChildOf: string | null;
  isParentOf: string[] | null;
  prices: OrderCatalogDedicatedProductPrice;
  specifications: OrderCatalogDedicatedProductSpecification;
};
