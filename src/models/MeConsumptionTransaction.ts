/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeConsumptionTransactionElement } from './MeConsumptionTransactionElement';
import { MeConsumptionPrice } from './MeConsumptionPrice';

export type MeConsumptionTransaction = {
  beginDate: Date;
  creationDate: Date | null;
  elements: MeConsumptionTransactionElement[];
  endDate: Date | null;
  id: number | null;
  lastUpdate: Date | null;
  price: MeConsumptionPrice;
  serviceId: number;
};
