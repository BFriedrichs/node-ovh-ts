/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyProtocolEnum } from './TelephonyProtocolEnum';
import { OrderPrice } from './OrderPrice';
import { TelephonyRmaOfferTypeEnum } from './TelephonyRmaOfferTypeEnum';

export type TelephonyLinePhone = {
  brand: string;
  description: string;
  fees: OrderPrice | null;
  maxline: number;
  offerType: TelephonyRmaOfferTypeEnum;
  price: OrderPrice;
  protocol: TelephonyProtocolEnum;
};
