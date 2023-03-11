/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsCountryEnum } from './SmsCountryEnum';
import { OrderPrice } from './OrderPrice';

export type SmsDestinationRates = {
  country: string;
  countryCode: SmsCountryEnum;
  credit: number;
  price: OrderPrice;
};
