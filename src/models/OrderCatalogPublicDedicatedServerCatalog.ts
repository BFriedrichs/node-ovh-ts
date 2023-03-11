/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicAddonFamily } from './OrderCatalogPublicAddonFamily';
import { OrderCatalogPublicPlan } from './OrderCatalogPublicPlan';
import { OrderCatalogPublicLocale } from './OrderCatalogPublicLocale';
import { OrderCatalogPublicDedicatedServerProduct } from './OrderCatalogPublicDedicatedServerProduct';

export type OrderCatalogPublicDedicatedServerCatalog = {
  addons: OrderCatalogPublicPlan;
  catalogId: number;
  locale: OrderCatalogPublicLocale;
  planFamilies: OrderCatalogPublicAddonFamily;
  plans: OrderCatalogPublicPlan;
  products: OrderCatalogPublicDedicatedServerProduct;
};
