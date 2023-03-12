/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogConfigurationItem } from './OrderCatalogConfigurationItem';
import { OrderCartGenericProductTypeEnum } from './OrderCartGenericProductTypeEnum';

export type OrderCatalogProduct = {
  configurations?: OrderCatalogConfigurationItem[];
  description?: string;
  internalType?: OrderCartGenericProductTypeEnum;
  metadatas?: string | null;
  name?: string;
  subType?: string | null;
  technicalDetails?: string | null;
  type?: string | null;
};
