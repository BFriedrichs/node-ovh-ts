/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsCountryEnum } from './SmsCountryEnum';
import { OrderPrice } from './OrderPrice';

export type SmsPackDetails = {
  countryCode: SmsCountryEnum;
  credit: number;
  creditPrice: OrderPrice;
  creditQuantityMax: number | null;
  creditQuantityMin: number;
  discountCreditPrice: OrderPrice | null;
  discountPercentage: number | null;
  discountSmsPrice: OrderPrice | null;
  smsPrice: OrderPrice;
  smsQuantityMax: number | null;
  smsQuantityMin: number;
};
