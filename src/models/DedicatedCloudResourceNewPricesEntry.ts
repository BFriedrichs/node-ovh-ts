/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudRessourcesBillingTypeEnum } from './DedicatedCloudRessourcesBillingTypeEnum';
import { DedicatedCloudRessourcesResourceTypeEnum } from './DedicatedCloudRessourcesResourceTypeEnum';
import { OrderPrice } from './OrderPrice';

export type DedicatedCloudResourceNewPricesEntry = {
  billingType: DedicatedCloudRessourcesBillingTypeEnum;
  changed: boolean;
  name: string;
  newPrice: OrderPrice;
  oldPrice: OrderPrice;
  resourceType: DedicatedCloudRessourcesResourceTypeEnum;
};
