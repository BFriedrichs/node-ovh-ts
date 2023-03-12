/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceConsumptionTransactionElement } from './ServiceConsumptionTransactionElement';
import { OrderPrice } from './OrderPrice';

export type ServiceConsumptionTransaction = {
  beginDate: Date;
  creationDate: Date | null;
  elements: ServiceConsumptionTransactionElement[];
  endDate: Date | null;
  id: number | null;
  lastUpdate: Date | null;
  price: OrderPrice;
  serviceId: number;
};
