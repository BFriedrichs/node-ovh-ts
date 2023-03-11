/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';

export type TelephonyDetailedRateCodeInformation = {
  cancelLimitDatetime: Date | null;
  effectiveDatetime: Date | null;
  pricePerCallWithoutTax: OrderPrice;
  pricePerMinuteWithoutTax: OrderPrice;
  rateCode: string;
  repaymentPricePerCallWithoutTax: OrderPrice;
  repaymentPricePerMinuteWithoutTax: OrderPrice;
  updateRateCodePriceWithoutTax: OrderPrice | null;
};
