/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPccCommercialRange } from './OrderCatalogPccCommercialRange';
import { OrderCatalogProductPlan } from './OrderCatalogProductPlan';

export type OrderCatalogPccCatalog = {
  active: boolean;
  catalogId: string;
  catalogName: string;
  commercialRanges: OrderCatalogPccCommercialRange;
  merchantCode: string;
  plans: OrderCatalogProductPlan;
};
