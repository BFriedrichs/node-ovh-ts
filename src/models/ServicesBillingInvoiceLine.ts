/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { ServicesBillingInvoiceLineTypeEnum } from './ServicesBillingInvoiceLineTypeEnum';

export type ServicesBillingInvoiceLine = {
  description?: string;
  periodEnd?: Date | null;
  periodStart?: Date | null;
  price?: OrderPrice;
  quantity?: number;
  serviceName?: string;
  totalPrice?: OrderPrice;
  type?: ServicesBillingInvoiceLineTypeEnum | null;
};
