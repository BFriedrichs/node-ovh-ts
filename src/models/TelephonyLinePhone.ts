/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyRmaOfferTypeEnum } from './TelephonyRmaOfferTypeEnum';
import { TelephonyProtocolEnum } from './TelephonyProtocolEnum';
import { OrderPrice } from './OrderPrice';

export type TelephonyLinePhone = {
  brand: string;
  description: string;
  fees: OrderPrice | null;
  maxline: number;
  offerType: TelephonyRmaOfferTypeEnum;
  price: OrderPrice;
  protocol: TelephonyProtocolEnum;
};
