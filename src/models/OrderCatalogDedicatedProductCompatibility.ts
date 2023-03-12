/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogDedicatedProductCompatibilityRestriction } from './OrderCatalogDedicatedProductCompatibilityRestriction';
import { OrderCatalogDedicatedTechDetailsPlanSpecificity } from './OrderCatalogDedicatedTechDetailsPlanSpecificity';

export type OrderCatalogDedicatedProductCompatibility = {
  plan?: string;
  restrictions?: OrderCatalogDedicatedProductCompatibilityRestriction[] | null;
  specificities?: OrderCatalogDedicatedTechDetailsPlanSpecificity[] | null;
};
