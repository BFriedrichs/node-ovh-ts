/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyProtocolEnum } from './TelephonyProtocolEnum';
import { TelephonyPhoneConfigurationProperty } from './TelephonyPhoneConfigurationProperty';

export type TelephonyPhone = {
  brand?: string;
  description?: string;
  macAddress?: string;
  maxSimultaneousCalls?: number;
  maxline?: number;
  mgcpIpRestriction?: string | null;
  phoneConfiguration?: TelephonyPhoneConfigurationProperty[];
  protocol?: TelephonyProtocolEnum;
  userPassword?: string | null;
};
