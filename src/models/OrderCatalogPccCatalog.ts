/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogProductPlan } from './OrderCatalogProductPlan';
import { OrderCatalogPccCommercialRange } from './OrderCatalogPccCommercialRange';

export type OrderCatalogPccCatalog = {
  active?: boolean;
  catalogId?: string;
  catalogName?: string;
  commercialRanges?: OrderCatalogPccCommercialRange[];
  merchantCode?: string;
  plans?: OrderCatalogProductPlan[];
};
