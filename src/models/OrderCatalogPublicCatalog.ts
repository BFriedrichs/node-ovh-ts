/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProduct } from './OrderCatalogPublicProduct';
import { OrderCatalogPublicPlan } from './OrderCatalogPublicPlan';
import { OrderCatalogPublicLocale } from './OrderCatalogPublicLocale';
import { OrderCatalogPublicPlanFamily } from './OrderCatalogPublicPlanFamily';

export type OrderCatalogPublicCatalog = {
  addons: OrderCatalogPublicPlan;
  catalogId: number;
  locale: OrderCatalogPublicLocale;
  planFamilies: OrderCatalogPublicPlanFamily;
  plans: OrderCatalogPublicPlan;
  products: OrderCatalogPublicProduct;
};
