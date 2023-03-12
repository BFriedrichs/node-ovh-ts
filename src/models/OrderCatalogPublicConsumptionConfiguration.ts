/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPublicProrataUnitEnum } from './OrderCatalogPublicProrataUnitEnum';
import { OrderCatalogPublicBillingStrategyEnum } from './OrderCatalogPublicBillingStrategyEnum';
import { OrderCatalogPublicPingEndPolicyEnum } from './OrderCatalogPublicPingEndPolicyEnum';

export type OrderCatalogPublicConsumptionConfiguration = {
  billingStrategy?: OrderCatalogPublicBillingStrategyEnum;
  pingEndPolicy?: OrderCatalogPublicPingEndPolicyEnum | null;
  prorataUnit?: OrderCatalogPublicProrataUnitEnum;
};
