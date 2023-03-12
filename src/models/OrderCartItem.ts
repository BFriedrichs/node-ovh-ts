/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartPrice } from './OrderCartPrice';
import { OrderCartDomainSettings } from './OrderCartDomainSettings';

export type OrderCartItem = {
  cartId: string;
  configurations: number[] | null;
  duration: number | null;
  itemId: number;
  offerId: string;
  options: number[];
  parentItemId: number | null;
  prices: OrderCartPrice[];
  productId: string;
  settings: OrderCartDomainSettings;
};
