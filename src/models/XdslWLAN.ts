/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslXdslModemConfigFrequencyEnum } from './XdslXdslModemConfigFrequencyEnum';
import { XdslXdslModemConfigSecurityTypeEnum } from './XdslXdslModemConfigSecurityTypeEnum';
import { XdslXdslModemConfigChannelModeEnum } from './XdslXdslModemConfigChannelModeEnum';

export type XdslWLAN = {
  SSID: string;
  SSIDAdvertisementEnabled: boolean;
  bandSteering: boolean;
  channel: number;
  channelMode: XdslXdslModemConfigChannelModeEnum;
  enabled: boolean;
  frequency: XdslXdslModemConfigFrequencyEnum;
  guest: boolean;
  securityKey: string;
  securityType: XdslXdslModemConfigSecurityTypeEnum;
  taskId: number | null;
  wifiName: string;
};
