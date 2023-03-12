/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceRenewService } from './ServiceRenewService';
import { OrderPrice } from './OrderPrice';

export type ServiceRenewRenewStrategy = {
  price?: OrderPrice;
  priceInUcents?: number;
  services?: number[];
  servicesDetails?: ServiceRenewService[];
};
