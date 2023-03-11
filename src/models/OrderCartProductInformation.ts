/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartConfigurationRequirements } from './OrderCartConfigurationRequirements';
import { OrderCartDomainActionEnum } from './OrderCartDomainActionEnum';
import { OrderCartPrice } from './OrderCartPrice';

export type OrderCartProductInformation = {
  action: OrderCartDomainActionEnum;
  configurations: OrderCartConfigurationRequirements;
  deliveryTime: string;
  duration: number;
  offer: string | null;
  offerId: string | null;
  orderable: boolean;
  phase: string;
  prices: OrderCartPrice | null;
  pricingMode: string;
  productId: string;
  quantityMax: number;
};
