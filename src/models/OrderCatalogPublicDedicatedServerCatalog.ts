/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicLocale } from './OrderCatalogPublicLocale';
import { OrderCatalogPublicAddonFamily } from './OrderCatalogPublicAddonFamily';
import { OrderCatalogPublicPlan } from './OrderCatalogPublicPlan';
import { OrderCatalogPublicDedicatedServerProduct } from './OrderCatalogPublicDedicatedServerProduct';

export type OrderCatalogPublicDedicatedServerCatalog = {
  addons: OrderCatalogPublicPlan[];
  catalogId: number;
  locale: OrderCatalogPublicLocale;
  planFamilies: OrderCatalogPublicAddonFamily[];
  plans: OrderCatalogPublicPlan[];
  products: OrderCatalogPublicDedicatedServerProduct[];
};
