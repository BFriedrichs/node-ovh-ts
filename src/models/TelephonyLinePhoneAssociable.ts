/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyProtocolEnum } from './TelephonyProtocolEnum';
import { TelephonyLinePhoneAssociableConfiguredLines } from './TelephonyLinePhoneAssociableConfiguredLines';

export type TelephonyLinePhoneAssociable = {
  associatedLines: TelephonyLinePhoneAssociableConfiguredLines;
  brand: string;
  maxLines: number;
  protocol: TelephonyProtocolEnum;
};
