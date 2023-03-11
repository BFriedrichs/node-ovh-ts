/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesBillingInvoiceLineTypeEnum } from './ServicesBillingInvoiceLineTypeEnum';
import { OrderPrice } from './OrderPrice';

export type ServicesBillingInvoiceLine = {
  description: string;
  periodEnd: Date | null;
  periodStart: Date | null;
  price: OrderPrice;
  quantity: number;
  serviceName: string;
  totalPrice: OrderPrice;
  type: ServicesBillingInvoiceLineTypeEnum | null;
};
