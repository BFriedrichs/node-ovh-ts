/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { SmsCountryEnum } from './SmsCountryEnum';

export type SmsDestinationRates = {
  country?: string;
  countryCode?: SmsCountryEnum;
  credit?: number;
  price?: OrderPrice;
};
