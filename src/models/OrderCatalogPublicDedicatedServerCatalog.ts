/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicDedicatedServerProduct } from './OrderCatalogPublicDedicatedServerProduct';
import { OrderCatalogPublicAddonFamily } from './OrderCatalogPublicAddonFamily';
import { OrderCatalogPublicPlan } from './OrderCatalogPublicPlan';
import { OrderCatalogPublicLocale } from './OrderCatalogPublicLocale';

export type OrderCatalogPublicDedicatedServerCatalog = {
  addons?: OrderCatalogPublicPlan[];
  catalogId?: number;
  locale?: OrderCatalogPublicLocale;
  planFamilies?: OrderCatalogPublicAddonFamily[];
  plans?: OrderCatalogPublicPlan[];
  products?: OrderCatalogPublicDedicatedServerProduct[];
};
