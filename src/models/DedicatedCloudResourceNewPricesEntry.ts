/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { DedicatedCloudRessourcesResourceTypeEnum } from './DedicatedCloudRessourcesResourceTypeEnum';
import { DedicatedCloudRessourcesBillingTypeEnum } from './DedicatedCloudRessourcesBillingTypeEnum';

export type DedicatedCloudResourceNewPricesEntry = {
  billingType?: DedicatedCloudRessourcesBillingTypeEnum;
  changed?: boolean;
  name?: string;
  newPrice?: OrderPrice;
  oldPrice?: OrderPrice;
  resourceType?: DedicatedCloudRessourcesResourceTypeEnum;
};
