/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartGenericProductTypeEnum } from './OrderCartGenericProductTypeEnum';
import { OrderCatalogConfigurationItem } from './OrderCatalogConfigurationItem';

export type OrderCatalogProduct = {
  configurations: OrderCatalogConfigurationItem[];
  description: string;
  internalType: OrderCartGenericProductTypeEnum;
  metadatas: string | null;
  name: string;
  subType: string | null;
  technicalDetails: string | null;
  type: string | null;
};
