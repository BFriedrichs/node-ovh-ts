/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslXdslModemConfigChannelModeEnum } from './XdslXdslModemConfigChannelModeEnum';
import { XdslXdslModemConfigSecurityTypeEnum } from './XdslXdslModemConfigSecurityTypeEnum';
import { XdslXdslModemConfigFrequencyEnum } from './XdslXdslModemConfigFrequencyEnum';

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
